import Header from "./components/Header/Header";
import { Ephesis } from "next/font/google";
import "./globals.css";

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
      <body className="mx-auto flex max-w-6xl flex-col bg-zinc-50 p-4 text-dark-grey">
        <Header />
        {children}
      </body>
    </html>
  );
}
