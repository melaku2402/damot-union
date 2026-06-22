export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 📌  suppressHydrationWarning to fix browser adds
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
