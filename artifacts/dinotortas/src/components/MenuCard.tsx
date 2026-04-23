import { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  onAdd: () => void;
}

export function MenuCard({ name, description, price, onAdd }: MenuCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAdd();
    setTimeout(() => setIsAdding(false), 200);
  };

  return (
    <div className="bg-card rounded-3xl p-6 border-4 border-card-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full group">
      <div className="w-full h-48 bg-muted rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 dino-pattern" />
        <div className="w-24 h-24 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-500 blur-xl" />
        {/* Placeholder for real torta image */}
        <span className="font-display text-4xl text-muted-foreground z-10 rotate-[-5deg]">TORTA</span>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-foreground mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-muted-foreground font-bold mb-6 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-3xl text-secondary">
            ${price} <span className="text-lg text-muted-foreground">MXN</span>
          </span>
          <Button 
            onClick={handleAdd}
            size="lg"
            className={`rounded-full font-bold transition-transform ${isAdding ? "scale-90" : ""}`}
          >
            <Plus className="mr-2 h-5 w-5" />
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
