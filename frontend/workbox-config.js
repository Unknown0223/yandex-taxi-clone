export default {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,html,png,svg,webmanifest}'],
  swDest: 'dist/sw.js',
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.destination === 'document',
      handler: 'NetworkFirst',
      options: { cacheName: 'html-cache' },
    },
    {
      urlPattern: ({ request }) =>
        ['style', 'script', 'worker'].includes(request.destination),
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'asset-cache' },
    },
  ],
}