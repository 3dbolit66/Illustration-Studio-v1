import "./globals.css";

export const metadata = {
  title: "Illustration Studio",
  description: "Transforma fotografies en il·lustracions amb presets d'estil."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  );
}
