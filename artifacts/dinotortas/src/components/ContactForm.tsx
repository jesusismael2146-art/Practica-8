import { useState, FormEvent } from "react";
import { Send, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";

type FormState = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { nombre: "", email: "", asunto: "", mensaje: "" };

export function ContactForm() {
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (state: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!state.nombre.trim()) e.nombre = "Dinos cómo te llamas";
    if (!state.email.trim()) {
      e.email = "Necesitamos tu correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      e.email = "Ese correo no parece válido";
    }
    if (!state.asunto.trim()) e.asunto = "Escribe un asunto";
    if (!state.mensaje.trim()) {
      e.mensaje = "Cuéntanos qué necesitas";
    } else if (state.mensaje.trim().length < 10) {
      e.mensaje = "Tu mensaje debe tener al menos 10 caracteres";
    }
    return e;
  };

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(data);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setData(EMPTY);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-card p-10 rounded-3xl border-4 border-card-border shadow-xl text-center flex flex-col items-center">
        <div className="bg-secondary text-secondary-foreground p-5 rounded-full mb-6 animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="font-display text-3xl mb-4 text-foreground">
          ¡Mensaje rugiente recibido!
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          Gracias por escribirnos. Nuestra manada te responderá lo antes posible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-primary text-primary-foreground font-display text-lg px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-card p-8 md:p-10 rounded-3xl border-4 border-card-border shadow-xl"
    >
      <h3 className="font-display text-3xl mb-2">Escríbenos</h3>
      <p className="text-muted-foreground mb-8">
        ¿Reservación, evento o duda jurásica? Mándanos un mensaje.
      </p>

      <div className="space-y-5">
        <Field
          label="Nombre"
          icon={<User size={18} />}
          error={errors.nombre}
        >
          <input
            type="text"
            value={data.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-background text-foreground border-2 border-border rounded-2xl px-4 py-3 pl-11 focus:outline-none focus:border-primary transition-colors font-bold"
          />
        </Field>

        <Field
          label="Correo electrónico"
          icon={<Mail size={18} />}
          error={errors.email}
        >
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className="w-full bg-background text-foreground border-2 border-border rounded-2xl px-4 py-3 pl-11 focus:outline-none focus:border-primary transition-colors font-bold"
          />
        </Field>

        <Field
          label="Asunto"
          icon={<MessageSquare size={18} />}
          error={errors.asunto}
        >
          <input
            type="text"
            value={data.asunto}
            onChange={(e) => handleChange("asunto", e.target.value)}
            placeholder="Reservación, pedido, evento..."
            className="w-full bg-background text-foreground border-2 border-border rounded-2xl px-4 py-3 pl-11 focus:outline-none focus:border-primary transition-colors font-bold"
          />
        </Field>

        <Field label="Mensaje" error={errors.mensaje}>
          <textarea
            value={data.mensaje}
            onChange={(e) => handleChange("mensaje", e.target.value)}
            placeholder="Cuéntanos en qué te podemos ayudar..."
            rows={4}
            className="w-full bg-background text-foreground border-2 border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-bold resize-none"
          />
        </Field>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-primary text-primary-foreground font-display text-xl py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {sending ? (
            <>Enviando...</>
          ) : (
            <>
              <Send size={20} />
              Enviar mensaje
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="font-display text-base text-foreground mb-2 block">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {icon}
          </span>
        )}
        {children}
      </div>
      {error && (
        <p className="text-destructive text-sm font-bold mt-2 ml-2">{error}</p>
      )}
    </div>
  );
}
