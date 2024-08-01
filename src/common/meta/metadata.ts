import { Metadata } from "next"

export const generateMetadata = (): Metadata => ({
  title: {
    template: '%s | My Site Name',  // Title template with placeholder %s for page-specific title
    default: 'Default Page Title',
  },
  description: 'A description of my page for SEO and social sharing.',
  icons: {
    icon: '/favicon.ico',  // Path to the favicon
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    url: 'https://example.com/page-url',
    siteName: 'Site Name',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',  // Can be 'article', 'website', etc.
    locale: 'en_US',  // Language/locale of the page
  },
  twitter: {
    card: 'summary_large_image',
    site: '@twitter_handle',
    title: 'Twitter Title',
    description: 'Twitter Description',
    creator: '@twitter_creator_handle',  // Twitter handle of the content creator
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://example.com/page-url',
    languages: {
      en: 'https://example.com/en/page-url',
      es: 'https://example.com/es/page-url',
    },
  },
  viewport: 'width=device-width, initial-scale=1',  // Viewport settings for mobile responsiveness
  themeColor: '#ffffff',  // Theme color for mobile browsers
  appleWebApp: {
    title: 'My App Title',  // Title for iOS web apps
    statusBarStyle: 'black-translucent',  // Status bar style for iOS
  },
})