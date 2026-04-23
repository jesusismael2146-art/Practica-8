import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
  onAdd: () => void;
}

const PRODUCTS = [
  {
    id: "t-rex",
    name: "T-Rex Milanesa",
    description: "Torta monstruosa de milanesa con queso gratinado.",
    price: 80,
    emoji: "🦖" // Used purely for internal reference or alt text, removing from UI per instructions. Wait, instruction says "Do not use emojis anywhere in the UI". I will use Lucide icons or just abstract shapes.
  },
  {
    id: "triceratops",
    name: "Triceratops Cubana",
    description: "La pesada con 3 carnes diferentes y su escudo protector de aguacate.",
    price: 95
  },
  {
    id: "bronto",
    name: "Bronto-Rajas",
    description: "Torta herbívora gigante de rajas poblanas, elote y crema.",
    price: 70
  },
  {
    id: "ptero",
    name: "Pterodáctilo de Pollo",
    description: "Pechuga de pollo a la plancha, ¡volando directo a tu mesa!",
    price: 75
  },
  {
    id: "postre",
    name: "Dino-Postre",
    description: "Galleta gigante con chispas en forma de garra.",
    price: 30
  }
];

export function MenuSection({ onAdd }: MenuSectionProps) {
  return (
    <section id="menu" className="w-full py-24 bg-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Nuestro Menú <span className="text-primary">Jurásico</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => (
            <MenuCard 
              key={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
