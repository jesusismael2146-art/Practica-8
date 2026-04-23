import { Footprints } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="bg-primary p-3 rounded-2xl mb-6">
          <Footprints size={40} className="rotate-45 text-primary-foreground" />
        </div>
        <h2 className="font-display text-3xl mb-4">DinoTortas</h2>

        <img
          src="https://res.cloudinary.com/dbj2f8tbz/image/upload/v1776980285/descarga_dcuc6o.png"
          alt="Logo institucional"
          className="h-24 w-auto my-6 bg-background/90 rounded-xl p-3"
        />

        <div className="space-y-1 mb-6 font-bold opacity-90">
          <p className="text-lg">Jesús Ismael Magaña Mojica</p>
          <p className="opacity-80">Desarrollo web</p>
          <p className="opacity-80">ZEUS EMANUEL GUTIERREZ COBIAN</p>
          <p className="opacity-80">2026-A</p>
        </div>

        <p className="font-bold opacity-70 text-sm">© {new Date().getFullYear()} DinoTortas. Todos los derechos reservados.</p>
      </div>
      <div className="absolute -bottom-20 -right-20 opacity-5 w-64 h-64">
        <Footprints size={256} className="rotate-[-20deg]" />
      </div>
    </footer>
  );
}
