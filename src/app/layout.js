import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { Provider } from "@/utils/Provider/Provider";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { inter } from "./fonts";


export const metadata = {
  title: "Tarek Buys Houses For Cash - We Buy Houses In Any Condition - Tarek Buys Houses",
  description: "Sell Your Home In Any Condition. Close In Weeks. No showings, no repairs, no stress. The Tarek Buys Houses Advantage When you sell your home as-is to Tarek Buys Houses, we are committed to getting you the best offer possible. We have helped homeowners from all across America with distressed homes sell fast, making the […]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" date-theme="dark">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>



        <Provider>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          {children}

          <Footer />
        </Provider>



      </body>
    </html>
  );
}
