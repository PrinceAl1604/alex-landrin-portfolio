/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Case-study art is supplied by Alex later; keep formats modern + no CLS.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
