import { Button } from "./ui/button";

export function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Texture / Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none dino-pattern" />
      
      {/* Abstract Jungle Leaves */}
      <div className="absolute -left-20 top-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col items-center text-center text-secondary-foreground">
        
        <div className="inline-block mb-6 px-6 py-2 bg-accent text-accent-foreground font-display text-xl rounded-full rotate-[-2deg] shadow-lg border-4 border-foreground">
          ¡Cuidado! ¡Están vivas!
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 drop-shadow-md" style={{ textShadow: '4px 4px 0px hsl(var(--foreground))' }}>
          ¡Bienvenidos a<br/>
          <span className="text-primary" style={{ textShadow: '4px 4px 0px hsl(var(--foreground))' }}>DINO-TORTAS!</span>
        </h1>
        
        <p className="text-xl md:text-3xl max-w-3xl font-bold mb-10 text-secondary-foreground/90 leading-tight">
          El sabor más grande de la prehistoria.<br className="hidden md:block"/> 
          Disfruta de nuestras tortas monstruosas.
        </p>
        
        <Button 
          size="lg" 
          className="text-2xl px-12 py-8 rounded-full font-display border-b-[8px] border-primary-foreground/20 active:border-b-0 active:translate-y-[8px] transition-all hover:scale-105"
          onClick={scrollToMenu}
        >
          ¡PIDE ONLINE!
        </Button>
      </div>
      
      {/* Cave floor decorative edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-[100%] scale-x-150 origin-bottom pointer-events-none" />
    </section>
  );
}
