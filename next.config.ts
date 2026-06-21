import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Разрешаем собственные SVG-превью проектов (они наши, риск XSS отсутствует).
    // Если используешь PNG/JPG-скриншоты — эта настройка не мешает.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Пробуем современные форматы: AVIF (легче и качественнее JPEG) с fallback на WebP.
    // Превью visora.jpg (497 КБ) и specialty-coffee.jpg (387 КБ) при первом рендере
    // отдадутся существенно легче.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
