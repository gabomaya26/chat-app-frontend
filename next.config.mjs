/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL: "https://chat-app-mu-blush.vercel.app/api/chat/"
    },
    images: {
        remotePatterns: [
            {            
                protocol: "https",
                hostname: "chat-app-mu-blush.vercel.app",
                pathname: "/media/profile_pictures/**"
            }
        ]
    }

};

export default nextConfig;


