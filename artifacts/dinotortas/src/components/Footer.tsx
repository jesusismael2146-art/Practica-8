import { Footprints } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="bg-primary p-3 rounded-2xl mb-6">
          <Footprints size={40} className="rotate-45 text-primary-foreground" />
        </div>
        <h2 className="font-display text-3xl mb-4">DinoTortas</h2>
        <p className="font-bold opacity-80">© {new Date().getFullYear()} DinoTortas. Todos los derechos reservados.</p>
      </div>
      <div className="absolute -bottom-20 -right-20 opacity-5 w-64 h-64">
        <Footprints size={256} className="rotate-[-20deg]" />
      </div>
    </footer>
  );
}
