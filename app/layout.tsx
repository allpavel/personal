import Header from "./components/Header/Header";
import { Ephesis } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--ephesis",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ephesis.variable}>
      <body className="mx-auto flex min-h-screen max-w-6xl flex-col bg-zinc-50 p-4 text-dark-grey">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
