export function HistorySection() {
  return (
    <section id="historia" className="w-full py-32 cave-texture relative text-secondary-foreground overflow-hidden">
      {/* Jagged top/bottom borders (CSS tricks) */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background" style={{ clipPath: 'polygon(0 0, 10% 100%, 20% 0, 30% 100%, 40% 0, 50% 100%, 60% 0, 70% 100%, 80% 0, 90% 100%, 100% 0)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background" style={{ clipPath: 'polygon(0 100%, 10% 0, 20% 100%, 30% 0, 40% 100%, 50% 0, 60% 100%, 70% 0, 80% 100%, 90% 0, 100% 100%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-8 py-3 bg-primary text-primary-foreground font-display text-2xl rounded-2xl rotate-2 border-4 border-foreground shadow-lg">
            Experiencia Dino-temática
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl mb-10 text-white drop-shadow-lg" style={{ textShadow: '4px 4px 0px hsl(var(--foreground))' }}>
            Nuestra Historia
          </h2>
          
          <div className="bg-background/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-4 border-white/20 shadow-2xl">
            <p className="text-2xl md:text-4xl font-bold leading-relaxed text-white">
              DinoTortas nació de la idea de fusionar el inigualable sabor callejero tradicional con la diversión del periodo Jurásico. ¡Una mordida y viajarás millones de años al pasado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
