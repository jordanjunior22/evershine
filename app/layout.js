import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Evershine",
  description: "Cleaning Service Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="rajdhani-regular ">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
