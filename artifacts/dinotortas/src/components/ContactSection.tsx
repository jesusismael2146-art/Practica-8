import { MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="visitanos" className="w-full py-24 bg-muted relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            ¡Visítanos!
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-card p-10 rounded-3xl border-4 border-card-border shadow-xl">
            <h3 className="font-display text-3xl mb-8">Información</h3>
            
            <div className="flex items-start gap-4 mb-8 group">
              <div className="bg-secondary text-secondary-foreground p-4 rounded-2xl group-hover:rotate-12 transition-transform">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-display text-xl mb-1 text-muted-foreground">Dirección</h4>
                <p className="text-2xl font-bold text-foreground">Av. Prehistoria 123,<br/>Col. Roma.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-accent text-accent-foreground p-4 rounded-2xl group-hover:-rotate-12 transition-transform">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="font-display text-xl mb-1 text-muted-foreground">Horario</h4>
                <p className="text-2xl font-bold text-foreground">9:00 AM - 9:00 PM<br/>(Lunes a Domingo)</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] bg-border rounded-3xl border-4 border-foreground/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-background/50" />
            <div className="relative z-10 text-center p-6 bg-card rounded-2xl border-2 border-dashed border-muted-foreground shadow-lg group-hover:scale-105 transition-transform">
              <MapPin size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="font-display text-xl text-muted-foreground">Aquí va el Mapa de Google</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
