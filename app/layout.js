import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abu Taher | Developer",
  description: "Portfolio created by Abu Taher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700`}>
        <div>
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
