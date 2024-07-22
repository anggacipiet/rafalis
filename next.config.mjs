import withBundleAnalyzer from '@next/bundle-analyzer'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  images: {
    domains: ['www.universaleco.id', 'bosspanel.co.id', 'daconjayabeton.com','rafalis-cydjfnx5f-anggacipiets-projects.vercel.app'],
  }
}

export default bundleAnalyzer(nextConfig)