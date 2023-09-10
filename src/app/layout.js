import "./globals.css";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RLBot",
  description: "Relive every match!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      ></meta>
      <body className={"flex flex-col min-h-screen " + inter.className}>
        <Header />
        <Toaster position="top-right" />
        <main className="my-6 grow container mx-auto w-screen md:max-w-screen-xl px-4 py-2 flex flex-col justify-start items-stretch">
          <NextTopLoader color="linear-gradient(90deg,var(--primary-color),var(--secondary-color))" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
