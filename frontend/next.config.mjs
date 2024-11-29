const nextConfig = {
  images: {
    remotePatterns: [
      {
        // TODO: REMOVE THIS AFTER IMPLEMENT STORAGE
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

export default nextConfig
