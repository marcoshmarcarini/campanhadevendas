/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source: '/',
        destination: 'https://wa.me/5528999306492/?text=Olá!%20Vim%20da%20rede%20social%20e%20quero%20saber%20mais%20sobre%20o%20plano%20de%20saúde.%20',
        permanent: true,
        
      }
    ]
  }
};

export default nextConfig;
