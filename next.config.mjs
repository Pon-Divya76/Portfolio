/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"]
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  async headers() {
    return [
      {
        source: "/pon-divya-resume.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "attachment; filename=Pon-Divya-Resume.pdf" }
        ]
      }
    ];
  }
};

export default nextConfig;

