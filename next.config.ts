import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Разрешаем собственные SVG-превью проектов (они наши, риск XSS отсутствует).
    // Если используешь PNG/JPG-скриншоты — эта настройка не мешает.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
