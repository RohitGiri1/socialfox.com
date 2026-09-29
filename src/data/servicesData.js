export const serviceCategories = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    description: 'Elevate your profile visibility, reels reach & engagement metrics.',
    services: [
      { id: 1, name: 'Instagram High-Speed Reel Views', ratePer1k: 0.20, min: 100, max: 1000000, speed: 'Instant Start' },
      { id: 2, name: 'Instagram Reel & Post Shares', ratePer1k: 0.20, min: 100, max: 500000, speed: 'Instant' },
      { id: 3, name: 'Instagram Organic Target Likes', ratePer1k: 7.00, min: 50, max: 100000, speed: '10k/day' },
      { id: 4, name: 'Instagram Premium Profile Followers', ratePer1k: 35.00, min: 100, max: 50000, speed: 'High Retention' },
      { id: 5, name: 'Instagram Story Views + Impressions', ratePer1k: 1.50, min: 100, max: 50000, speed: 'Fast' }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '📺',
    description: 'Grow subscribers, video likes, watch hours and live stream audience.',
    services: [
      { id: 101, name: 'YouTube Real Channel Subscribers', ratePer1k: 0.83, min: 10, max: 100000, speed: 'Non-Drop' },
      { id: 102, name: 'YouTube High-Retention Video Likes', ratePer1k: 10.00, min: 50, max: 50000, speed: 'Fast' },
      { id: 103, name: 'YouTube Watch Time Hours', ratePer1k: 450.00, min: 100, max: 4000, speed: 'Monetization Ready' },
      { id: 104, name: 'YouTube Shorts Views', ratePer1k: 12.00, min: 500, max: 1000000, speed: 'Instant' }
    ]
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: '✈️',
    description: 'Boost public channel members, post views and custom reactions.',
    services: [
      { id: 201, name: 'Telegram Channel/Group Members', ratePer1k: 18.00, min: 100, max: 100000, speed: '0-1 hr' },
      { id: 202, name: 'Telegram Post Auto Views (Last 10)', ratePer1k: 2.50, min: 100, max: 50000, speed: 'Instant' }
    ]
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '👥',
    description: 'Expand page followers, profile likes and video views.',
    services: [
      { id: 301, name: 'Facebook Page Likes + Followers', ratePer1k: 40.00, min: 100, max: 50000, speed: 'Gradual' },
      { id: 302, name: 'Facebook Video & Reel Views', ratePer1k: 5.00, min: 500, max: 500000, speed: 'Instant' }
    ]
  }
];

export const oneRupeeValue = {
  instagram: [
    { metric: 'Reel Views', quantity: 'Up to 5,000', label: 'Starting from ₹0.20/k' },
    { metric: 'Post Shares', quantity: 'Up to 5,000', label: 'Instant distribution' },
    { metric: 'Profile Followers', quantity: 'Around 20–30', label: 'High quality' },
    { metric: 'Post Likes', quantity: 'Around 140', label: 'Organic blend' }
  ],
  youtube: [
    { metric: 'Subscribers', quantity: '1,200+', label: 'Channel boost' },
    { metric: 'Video Likes', quantity: '100+', label: 'High retention' },
    { metric: 'Watch Time', quantity: 'Available', label: 'Monetization tier' },
    { metric: 'Shorts Reach', quantity: 'Multiple Services', label: 'High velocity' }
  ]
};

export const faqList = [
  {
    q: 'What is Social Fox?',
    a: 'Social Fox is a social-media growth platform and mobile application designed to help creators, small businesses, and agencies build momentum across platforms like Instagram, YouTube, Telegram, and Facebook.'
  },
  {
    q: 'How does Social Fox work?',
    a: 'Inside the Social Fox app, you simply select your desired platform, choose a service category (like followers, likes, or views), enter your target profile or video link, and specify your order quantity. Our automated system handles processing immediately.'
  },
  {
    q: 'Which platforms are supported?',
    a: 'We currently support Instagram, YouTube, Telegram, Facebook, TikTok, Twitter/X, Spotify, LinkedIn, Discord, and Website Traffic.'
  },
  {
    q: 'How does the ₹100 joining bonus work?',
    a: 'New users who download Social Fox and register an account receive a welcome bonus credited directly to their in-app wallet balance (terms and promotional eligibility apply). You can use this balance immediately to test any service!'
  },
  {
    q: 'Are service prices and quantities fixed?',
    a: 'No. Service pricing and minimum/maximum order limits adapt based on provider API pipelines. Example pricing displayed on this site reflects live baseline options in the app and may adjust over time.'
  },
  {
    q: 'Can I track my order status?',
    a: 'Yes! The Social Fox mobile application includes a live order history tracker showing order progress percentage, start counts, remaining counts, and live status (Pending, Processing, In-Progress, Completed).'
  },
  {
    q: 'How can I download the app?',
    a: 'You can download the official Social Fox Android APK directly from our download links on this website or install it directly on your mobile device.'
  },
  {
    q: 'Can I use Social Fox for my business or client accounts?',
    a: 'Absolutely. Thousands of digital marketing agencies, social media managers, and small business owners use Social Fox to build baseline social proof and accelerate campaign visibility for client profiles.'
  },
  {
    q: 'How can I contact support?',
    a: 'Support is available directly within the Social Fox mobile app through our 24/7 dedicated support ticket system and contact options.'
  }
];
