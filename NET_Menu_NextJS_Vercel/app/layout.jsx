import "./globals.css";

export const metadata = {
  title: "NET Caffe & Restaurant | Menu",
  description: "Explore the menu of NET Caffe & Restaurant in Slemani. Browse dishes, view photos, and plan your order.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1B1A1C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Outfit:wght@400;500;600&family=Vazirmatn:wght@400;500;700&family=Noto+Kufi+Arabic:wght@600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
