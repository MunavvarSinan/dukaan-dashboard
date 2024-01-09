/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/payments',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
