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

          <div className="w-full h-[400px] rounded-3xl border-4 border-foreground/10 overflow-hidden group shadow-xl">
            <img
              src="https://res.cloudinary.com/dbj2f8tbz/image/upload/v1776979976/Gemini_Generated_Image_9l4dmt9l4dmt9l4d_afepvx.png"
              alt="Visítanos en DinoTortas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
