/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"openweathermap.org"
		],
	},
	env: {
		BASE_URL: process.env.NEXT_PUBLIC_BASE_URL, 
		API_KEY: process.env.NEXT_PUBLIC_API_KEY, 
		PORTAL_URL: process.env.NEXT_PUBLIC_PORTAL_URL, 
	},
};

module.exports = nextConfig;
