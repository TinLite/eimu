/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "phim.nguonc.com"
            }
        ]
    }
};

export default nextConfig;
