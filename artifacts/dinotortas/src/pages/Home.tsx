import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { HistorySection } from "@/components/HistorySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary selection:text-primary-foreground">
      <Header cartCount={cartCount} />
      <main className="flex-1">
        <Hero />
        <MenuSection onAdd={handleAddToCart} />
        <HistorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
