import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
//run this npx next dev -p 4000

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
