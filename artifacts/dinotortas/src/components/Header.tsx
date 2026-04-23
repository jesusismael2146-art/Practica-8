import { ShoppingCart, Footprints } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b-4 border-primary">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("inicio")}
        >
          <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:-rotate-12 transition-transform">
            <Footprints size={28} className="rotate-45" />
          </div>
          <span className="font-display text-2xl tracking-wide text-foreground">
            Dino<span className="text-primary">Tortas</span>
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
          <button onClick={() => scrollTo("inicio")} className="hover:text-primary transition-colors hover:-translate-y-1">Inicio</button>
          <button onClick={() => scrollTo("menu")} className="hover:text-primary transition-colors hover:-translate-y-1">Menú Jurásico</button>
          <button onClick={() => scrollTo("historia")} className="hover:text-primary transition-colors hover:-translate-y-1">Nuestra Historia</button>
          <button onClick={() => scrollTo("visitanos")} className="hover:text-primary transition-colors hover:-translate-y-1">Visítanos</button>
        </nav>

        {/* Cart */}
        <div className="flex items-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="rounded-full font-bold relative overflow-visible group"
          >
            <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Carrito</span>
            
            <div className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground text-sm font-display w-8 h-8 flex items-center justify-center rounded-full border-4 border-background animate-in zoom-in spin-in">
              {cartCount}
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
