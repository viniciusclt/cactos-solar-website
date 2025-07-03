import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;