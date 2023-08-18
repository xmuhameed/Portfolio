/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg",
      },
    ],
  },
};

module.exports = nextConfig
