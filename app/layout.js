import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { DarkMode } from '@/components/DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mohamed's Portfolio",
  description: 'Mohamed Mostafa Abdelkader Website',
  name: "google-site-verification",
  content: "l9vy83RzifvaZrr9_U-WPISNubf1VBvoPGa78Ww9Djg",
}
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="l9vy83RzifvaZrr9_U-WPISNubf1VBvoPGa78Ww9Djg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <DarkMode />
        {children}
        <Footer />
      </body>
    </html>
  );
}
