/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'help.twitter.com',
        port: '',
        pathname: '/content/dam/help-twitter/brand/logo.png',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/D5603AQE2MJqyXUhOMw/profile-displayphoto-shrink_400_400/0/1667242045179?e=1679529600&v=beta&t=j9IJtL5XvlZTNkvb6bLK56Bd418rmf1MjicPG4Ev9qA'
      }
    ]
  }
}

module.exports = nextConfig
