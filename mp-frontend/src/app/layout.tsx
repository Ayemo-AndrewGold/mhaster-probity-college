import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalWidgets from "@/components/layout/GlobalWidgets";


//type LayoutProps<T extends string> = Readonly
export const metadata: Metadata = {
  title: {
    template: "%s | Mhastar Probity College",
    default: "Mhastar Probity College - Towards Academic & Moral Excellence",
  },
  description:
    "Mhastar Probity College is a co-educational private secondary school in Sango Ota, Ogun State, Nigeria, committed to academic excellence and moral development in a serene learning environment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <GlobalWidgets />
        <Footer />
      </body>
    </html>
  );
}
