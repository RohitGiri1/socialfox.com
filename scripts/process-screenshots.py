#!/usr/bin/env python3
"""
Repeatable build-time script to crop, optimize, and export app screenshots to WebP.
- Crops Android status bar (top) and navigation bar (bottom).
- Enforces identical aspect ratio across all images.
- Applies privacy blurs to sensitive/account info.
- Exports 720w and 360w WebP variants at ~82 quality.
"""

import os
from PIL import Image, ImageFilter, ImageDraw, ImageFont

def process_screenshots():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    assets_dir = os.path.join(base_dir, 'src', 'assets')
    out_dir = os.path.join(base_dir, 'public', 'screenshots')
    os.makedirs(out_dir, exist_ok=True)

    # Logical sequence of screens
    screens = [
        ("screen-1", "29440.jpg", "Home / Dashboard"),
        ("screen-2", "29437.jpg", "Services Catalog"),
        ("screen-3", "29438.jpg", "Live Rates & Platforms"),
        ("screen-4", "29441.jpg", "Instant Order Placement"),
        ("screen-5", "29439.jpg", "Automated Delivery Engine"),
    ]

    # Crop box: removes status bar (top 96px) and nav bar (bottom 168px)
    # Output aspect ratio: 1080 x 2144
    crop_box = (0, 96, 1080, 2240)
    
    total_720 = 0
    total_360 = 0

    print("=== Processing Screenshots ===")
    for name, filename, label in screens:
        src_path = os.path.join(assets_dir, filename)
        if not os.path.exists(src_path):
            print(f"Warning: {src_path} not found!")
            continue

        im = Image.open(src_path).convert('RGB')
        cropped = im.crop(crop_box)

        # Privacy adjustments:
        # Screen 1: Blur user account name "team simson"
        if name == "screen-1":
            user_box = (505, 482, 750, 510)
            user_region = cropped.crop(user_box)
            blurred = user_region.filter(ImageFilter.GaussianBlur(radius=8))
            cropped.paste(blurred, user_box)

        # Screen 4: Replace raw query parameter with clean profile placeholder
        if name == "screen-4":
            draw = ImageDraw.Draw(cropped)
            draw.rectangle([175, 705, 980, 770], fill=(21, 21, 21))
            try:
                font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 36)
            except Exception:
                font = ImageFont.load_default()
            draw.text((180, 718), "instagram.com/your_profile", fill=(210, 210, 210), font=font)

        # 720w variant (max 720px width)
        im_720 = cropped.resize((720, 1429), Image.Resampling.LANCZOS)
        p720 = os.path.join(out_dir, f"{name}-720w.webp")
        im_720.save(p720, 'WEBP', quality=82)
        s720 = os.path.getsize(p720)
        total_720 += s720

        # 360w variant for srcset
        im_360 = cropped.resize((360, 715), Image.Resampling.LANCZOS)
        p360 = os.path.join(out_dir, f"{name}-360w.webp")
        im_360.save(p360, 'WEBP', quality=82)
        s360 = os.path.getsize(p360)
        total_360 += s360

        print(f"✓ {name} ({label}): 720w={s720/1024:.1f} KB | 360w={s360/1024:.1f} KB")

    print(f"Total 720w set size: {total_720/1024:.1f} KB (Target < 500 KB)")
    print(f"Total 360w set size: {total_360/1024:.1f} KB")

if __name__ == '__main__':
    process_screenshots()
