import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/store";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { NavBar } from "./components/navbar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed's Portfolio",
  description: "Mohamed Mostafa Abdelkader Website",
  name: "google-site-verification",
  content: "l9vy83RzifvaZrr9_U-WPISNubf1VBvoPGa78Ww9Djg",
  icons: {
    icon: "../public/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="l9vy83RzifvaZrr9_U-WPISNubf1VBvoPGa78Ww9Djg"
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-backgroundColor`}>
        <GlobalContextProvider>
          <ParticlesBackground />
          <NavBar />
          {children}
          <ToastContainer />
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
