/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets the dev server be opened from other devices on the local network (e.g. a phone).
  allowedDevOrigins: ["192.168.2.200"],
}

module.exports = nextConfig
