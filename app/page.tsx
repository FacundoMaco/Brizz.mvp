import Image from "next/image";
import Link from "next/link";

import { PaymentPanel } from "@/components/PaymentPanel";

const PRODUCT_NAME = "Briz";
const PRODUCT_PRICE = 75;
const PRODUCT_BENEFICIOS = [
  "Sin nicotina",
  "Sin humo",
  "Sensación real",
  "Varios sabores",
  "Fabricado en Perú"
] as const;
const BENEFITS_COPY: Record<(typeof PRODUCT_BENEFICIOS)[number], string> = {
  "Sin nicotina":
    "Aromas botánicos que activan la respiración consciente sin nicotina ni químicos estimulantes.",
  "Sin humo":
    "Disfruta vapor frío sin combustión. No deja olor, manchas ni residuos en ropa o espacio.",
  "Sensación real":
    "La boquilla metálica y el cuerpo de madera generan la misma gestualidad y placer del ritual.",
  "Varios sabores":
    "Recibe 3 cápsulas de regalo y una biblioteca de sabores rotativos con frutas, herbs y blends signature.",
  "Fabricado en Perú":
    "Diseño limeño con ensamblaje artesanal y control de calidad local para garantizar tu primera experiencia."
};
const HERO_IMG = "/images/briz-stick.png";
const GALLERY_IMGS = [
  "/images/briz-stick.png",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1468056961052-15507578a50d?auto=format&fit=crop&w=900&q=80"
];

const WHATSAPP_NUMBER = "+51999999999"; // reemplazar
const WHATSAPP_DIRECT_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`;
const WHATSAPP_MESSAGE = `Hola, quiero pedir ${PRODUCT_NAME}.`;
const YAPE_NUMBER = "999999999"; // reemplazar
const PLIN_NUMBER = "999999999"; // reemplazar
const MONTO_DEFAULT = PRODUCT_PRICE;

const TESTIMONIOS = [
  {
    nombre: "Valeria",
    cita:
      "Siento el ritual sin la culpa. Briz me acompaña en cada salida y mis amigos también lo aman."
  },
  {
    nombre: "Sebastián",
    cita:
      "Probé Briz por curiosidad y ya no extraño el cigarro tradicional. Sabores top."
  },
  {
    nombre: "Lucía",
    cita:
      "La experiencia de compra fue rápida y el dispositivo llegó en perfecto estado."
  }
];

const FAQS = [
  {
    pregunta: "¿Cuánto dura cada cápsula de aroma?",
    respuesta:
      "Una cápsula Briz rinde hasta 80 inhalaciones conscientes. Puedes alternar sabores durante el día y guardarlos en su sobre original para mantener la intensidad."
  },
  {
    pregunta: "¿Necesita batería, carga o mantenimiento?",
    respuesta:
      "No. Briz funciona con flujo de aire natural, sin resistencias ni recargas. Después de usarlo, simplemente cambia la cápsula y limpia el cuerpo con el paño incluido."
  },
  {
    pregunta: "¿Cómo coordino la entrega premium en Lima?",
    respuesta:
      "En Lima despachamos en menos de 24 horas con courier especializado. Tras tu pago, confirmamos por WhatsApp ubicación, horario y sabores."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos Yape, Plin y transferencias bancarias. Si necesitas factura, envíanos tus datos por WhatsApp y la emitimos junto al envío."
  }
];

const GARANTIA_TXT =
  "Cambios dentro de 7 días si presenta falla de fábrica.";
const POLITICA_TXT =
  "Pedido sujeto a verificación de stock. Mantener alejado de menores.";
const QUICK_METRICS = [
  {
    headline: "0% nicotina",
    description: "Aromas botánicos fríos, sin químicos estimulantes."
  },
  {
    headline: "80 inhalaciones",
    description: "Cada cápsula rinde una semana de ritual consciente."
  },
  {
    headline: "Entrega 24h",
    description: "Courier premium en Lima con confirmación en WhatsApp."
  }
];

const DECISION_CARDS = [
  {
    title: "Lo que recibes ya dispuesto",
    points: [
      "Dispositivo reutilizable en madera + metal.",
      "3 cápsulas naturales con sabores rotativos de cortesía.",
      "Guía digital + concierge para reposiciones en minutos."
    ]
  },
  {
    title: "Por qué se siente distinto",
    points: [
      "Respiración fría sin baterías ni humo.",
      "Diseño editorial que replica el ritual clásico.",
      "Blend botánico premium creado en Lima."
    ]
  },
  {
    title: "Úsalo si buscas",
    points: [
      "Cambiar el hábito sin nicotina.",
      "Experiencia portátil sin olor ni residuos.",
      "Regalar un dispositivo wellness de alta gama."
    ]
  }
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Rompe la punta del sabor",
    description:
      "Abre una cápsula y quiebra suavemente la punta sellada para liberar el aceite aromático antes de insertarla."
  },
  {
    title: "Inserta y fija la cápsula",
    description:
      "Desliza la cápsula hasta escuchar el clic. El flujo de aire se infusiona al instante sin requerir carga."
  },
  {
    title: "Respira y alterna sabores",
    description:
      "Inhala durante 3 segundos y exhala lento. Cambia de cápsula cuando quieras otra nota aromática."
  }
];

const TRUST_BADGES = [
  {
    label: "1,200+",
    description: "Personas en Lima ya respiran con Briz."
  },
  {
    label: "4.9/5",
    description: "Puntaje promedio en reseñas verificadas."
  },
  {
    label: "24/7",
    description: "Concierge activo para soporte y reposiciones."
  }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <HeroSection />
      <QuickMetricsSection />
      <DecisionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CheckoutSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

function AnnouncementBar() {
  return (
    <aside className="border-b border-white/10 bg-breeze-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 sm:px-6 lg:px-8">
        <span className="rounded-full bg-breeze-teal/20 px-3 py-1 text-[10px] text-breeze-teal">
          Entrega 24h Lima
        </span>
        <span>Compra segura por WhatsApp · Garantía 7 días</span>
      </div>
    </aside>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-breeze-dark via-breeze-blue to-black px-4 pb-28 pt-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-24 h-96 w-96 rounded-full bg-breeze-teal/35 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-10 h-[28rem] w-[28rem] rounded-full bg-breeze-lime/25 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-breeze-teal" />
              Edición Lima 2024
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] tracking-[0.4em] text-slate-200/70 shadow shadow-black/15">
              Respira limpio · sin nicotina
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Tu ritual premium sin nicotina empieza hoy.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl lg:text-[1.35rem]">
              Siente la gestualidad clásica con beneficio limpio. Briz fusiona
              madera + metal con blends botánicos para darte aroma, calma y cero
              humo desde el primer respiro.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-[auto_auto] sm:items-center">
            <div className="flex items-center gap-6 text-white">
              <span className="text-3xl font-semibold">S/ {PRODUCT_PRICE}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100">
                Lanzamiento exclusivo
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="#checkout"
                data-gtm-event="cta-hero-primary"
                className="inline-flex items-center justify-center rounded-full bg-breeze-teal px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-breeze-teal/40 transition hover:bg-breeze-teal/90"
              >
                Completar pedido
              </a>
              <Link
                href="https://instagram.com"
                data-gtm-event="cta-hero-secondary"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Ver sabores
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200/90 sm:grid-cols-3">
            {PRODUCT_BENEFICIOS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 px-4 py-3 shadow-sm shadow-black/10 backdrop-blur"
              >
                <span className="h-3 w-3 rounded-full bg-breeze-teal" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-6 top-6 h-[90%] rounded-[3rem] border border-white/10 bg-white/5 blur-3xl" />
          <div className="relative flex w-full max-w-lg flex-col gap-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 shadow-[0_40px_120px_-30px_rgba(20,184,166,0.55)] backdrop-blur">
              <Image
                src={HERO_IMG}
                alt="Dispositivo Briz en mesa minimalista"
                fill
                priority
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-100 shadow-xl shadow-black/20 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Sensación real
                </p>
                <span className="rounded-full bg-breeze-teal/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  Zero Nic
                </span>
              </div>
              <p className="text-base font-semibold">
                “Una inhalación suave, sabores contundentes y cero irritación. Briz
                redefine el ritual con placer limpio.”
              </p>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Curado por Briz Labs</span>
                <span>Garantía Lima</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickMetricsSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal">
          Evalúalo en 10 segundos
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {QUICK_METRICS.map(({ headline, description }) => (
            <li
              key={headline}
              className="group rounded-[1.75rem] border border-slate-200/60 bg-white/90 p-6 shadow-sm shadow-breeze-blue/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)]"
            >
              <p className="text-sm font-semibold text-breeze-blue">{headline}</p>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DecisionSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-breeze-lime/8 via-white to-white" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
            Evalúa rápido
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-breeze-blue sm:text-4xl">
            Todo lo que necesitas saber antes de comprar en un vistazo.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Define si Briz es para ti en menos de un minuto: revisa qué incluye,
            qué lo hace único y en qué casos encaja perfecto.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DECISION_CARDS.map(({ title, points }) => (
            <article
              key={title}
              className="relative flex h-full flex-col gap-5 rounded-[2.25rem] border border-slate-200/70 bg-white/95 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-50px_rgba(15,23,42,0.5)]"
            >
              <div className="absolute -top-24 right-0 h-44 w-44 rounded-full bg-breeze-teal/12 blur-3xl" />
              <h3 className="relative text-lg font-semibold text-breeze-blue">
                {title}
              </h3>
              <ul className="relative space-y-3 text-sm text-slate-600">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-breeze-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-breeze-lime/15" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
            Beneficios principales
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-breeze-blue sm:text-4xl">
            El ritual perfecto, limpio y con sabor de autor.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Briz es un dispositivo creado en Lima con tecnología de inhalación
            precisa y sabores diseñados para acompañar cada momento.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_BENEFICIOS.map((benefit) => (
            <article
              key={benefit}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]"
            >
              <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-breeze-teal/10 blur-3xl transition group-hover:bg-breeze-teal/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-breeze-lime/0 opacity-0 transition group-hover:opacity-80" />
              <div className="relative flex h-full flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-breeze-teal/15 text-breeze-teal">
                  <span className="h-6 w-6 rounded-full border border-breeze-teal/60" />
                </span>
                <h3 className="text-lg font-semibold text-breeze-blue">
                  {benefit}
                </h3>
                <p className="text-sm text-slate-600">
                  {BENEFITS_COPY[benefit]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-breeze-lime/7 to-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-breeze-teal/15 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
            Testimonios reales
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-breeze-blue sm:text-4xl">
            Ritual aprobado por la comunidad Briz.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sumamos feedback todas las semanas para que migrar a una alternativa
            sin nicotina sea fácil, sensorial y premium.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-4 text-sm text-breeze-teal">
          {TRUST_BADGES.map(({ label, description }) => (
            <li
              key={label}
              className="rounded-full border border-breeze-teal/25 bg-breeze-teal/10 px-4 py-2 font-semibold text-breeze-blue"
            >
              <span className="text-breeze-teal">{label}</span> · {description}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map(({ nombre, cita }) => (
            <figure
              key={nombre}
              className="group relative h-full overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/85 p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] lg:p-8"
            >
              <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-breeze-teal/15 blur-3xl transition group-hover:bg-breeze-teal/25" />
              <blockquote className="relative text-base text-slate-600">
                “{cita}”
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between text-sm font-semibold text-breeze-blue">
                <span>{nombre}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-breeze-teal">
                  Lima · Perú
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-breeze-teal/10 via-white to-white" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
              Cómo funciona
            </p>
            <h2 className="text-3xl font-semibold text-breeze-blue sm:text-4xl">
              Usa Briz en tres pasos diseñados para ser effortless.
            </h2>
            <p className="max-w-xl text-lg text-slate-600">
              En tu primer pedido llega todo listo para que respires sin batería
              ni cables. Solo sigue estos pasos cuando recibas tus cápsulas.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HOW_IT_WORKS_STEPS.map(({ title, description }, index) => (
                <article
                  key={title}
                  className="relative flex h-full flex-col gap-4 rounded-[2rem] border border-breeze-teal/15 bg-white/90 p-6 shadow-[0_25px_70px_-45px_rgba(20,184,166,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-50px_rgba(20,184,166,0.4)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-breeze-teal/30 bg-breeze-teal/10 text-sm font-semibold text-breeze-blue">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-breeze-blue">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-breeze-teal/10 bg-white/60 shadow-[0_40px_120px_-35px_rgba(20,184,166,0.35)]">
              <Image
                src={GALLERY_IMGS[2]}
                alt="Dispositivo Briz inspirado en madera y metal sobre mesa minimalista"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-breeze-blue/10 bg-white/50 shadow-lg shadow-breeze-blue/15">
                <Image
                  src={GALLERY_IMGS[0]}
                  alt="Cápsulas de aromas naturales Briz sobre fondo luminoso"
                  fill
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-breeze-blue/10 bg-white/50 shadow-lg shadow-breeze-blue/15">
                <Image
                  src={GALLERY_IMGS[1]}
                  alt="Kit Briz con dispositivo sin carga y accesorios editoriales"
                  fill
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="rounded-[2rem] border border-breeze-teal/20 bg-white/80 p-6 shadow-[0_25px_60px_-40px_rgba(20,184,166,0.35)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal">
                Qué incluye Briz
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• 1 dispositivo Briz en acabado madera + metal.</li>
                <li>• 3 cápsulas de aromas naturales cortesía.</li>
                <li>• Habit tracker físico + acceso a guía de respiración.</li>
                <li>• Concierge por WhatsApp para reordenar sabores.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckoutSection() {
  const checkoutHighlights = [
    {
      title: "Entrega Lima 24h",
      description:
        "Despachos express en pedidos confirmados antes de las 5 p.m. Seguimiento en vivo con geolocalización."
    },
    {
      title: "Sabor a tu elección",
      description:
        "Coordina por WhatsApp tu sabor favorito y opciones de bundle antes del envío."
    },
    {
      title: "Atención 24/7",
      description:
        "El equipo Briz responde cualquier consulta técnica o de uso en minutos."
    },
    {
      title: "Pago seguro",
      description:
        "Validamos tu pago Yape/Plin y enviamos comprobante digital de inmediato."
    }
  ];

  return (
    <section id="checkout" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-breeze-lime/15 via-white to-breeze-teal/10" />
      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-breeze-teal/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center gap-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
              Finaliza tu compra
            </p>
            <h2 className="text-3xl font-semibold text-breeze-blue">
              Checkout Briz
            </h2>
            <p className="max-w-xl text-base text-slate-600">
              Completa tu pedido en 60 segundos. Confirmamos por WhatsApp,
              coordinamos entrega premium en Lima y activamos tu garantía al
              instante.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {checkoutHighlights.map(({ title, description }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)]"
              >
                <div className="absolute -top-20 right-0 h-32 w-32 rounded-full bg-breeze-teal/15 blur-3xl" />
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-breeze-teal/15 text-breeze-teal">
                  <span className="h-4 w-4 rounded-full border border-breeze-teal/60" />
                </span>
                <h3 className="text-sm font-semibold text-breeze-blue">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-lg shadow-breeze-blue/10">
              <Image
                src={GALLERY_IMGS[0]}
                alt="Detalle del dispositivo Briz"
                fill
                sizes="(min-width: 1024px) 360px, 70vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-lg shadow-breeze-blue/10">
              <Image
                src={GALLERY_IMGS[1]}
                alt="Accesorios Briz listos para entregar"
                fill
                sizes="(min-width: 1024px) 220px, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 rounded-[2rem] border border-breeze-blue/10 bg-white/80 p-6 text-sm text-slate-600 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.4)] backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal">
                Concierge Briz
              </p>
              <p className="mt-1 font-semibold text-breeze-blue">
                Personalizamos sabores, bundle y horarios de entrega.
              </p>
            </div>
            <a
              data-gtm-event="cta-concierge"
              href={WHATSAPP_DIRECT_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-breeze-blue/20 bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-breeze-blue transition hover:bg-breeze-lime/10"
            >
              Habla con concierge
            </a>
          </div>
        </div>
        <PaymentPanel
          amount={MONTO_DEFAULT}
          className="lg:translate-y-4"
          plinNumber={PLIN_NUMBER}
          productName={PRODUCT_NAME}
          qrImageSrc="/qr-placeholder.svg"
          whatsappMessage={WHATSAPP_MESSAGE}
          whatsappNumber={WHATSAPP_NUMBER}
          yapeNumber={YAPE_NUMBER}
        />
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-breeze-blue/10 via-white to-breeze-lime/15" />
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-breeze-teal/20 bg-white/80 p-10 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.65)] backdrop-blur lg:p-16">
        <div className="absolute -top-28 right-10 h-56 w-56 rounded-full bg-breeze-teal/15 blur-3xl" />
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-breeze-teal/20 bg-breeze-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-breeze-teal">
            Garantía Briz
          </div>
          <h2 className="text-3xl font-semibold text-breeze-blue sm:text-4xl">
            Sin riesgos: garantía 7 días sobre cualquier falla de fábrica.
          </h2>
          <p className="text-base text-slate-600">{GARANTIA_TXT}</p>
          <div className="flex flex-wrap gap-4 rounded-[2rem] border border-breeze-teal/20 bg-white/70 p-6 text-sm text-slate-600">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal">
                Política
              </p>
              <p className="mt-2 text-sm text-slate-600">{POLITICA_TXT}</p>
            </div>
            <div className="hidden h-16 w-px bg-breeze-teal/20 sm:block" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal">
                Cobertura
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Cambios sin costo, logística reversa y concierge 24/7 para darte
                soporte inmediato.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#checkout"
              data-gtm-event="cta-guarantee"
              className="inline-flex items-center justify-center rounded-full bg-breeze-blue px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-breeze-blue/30 transition hover:bg-breeze-blue/90"
            >
              Ordenar Briz por S/ {PRODUCT_PRICE}
            </a>
            <a
              href="mailto:hola@breeze.pe"
              data-gtm-event="cta-guarantee-support"
              className="inline-flex items-center justify-center rounded-full border border-breeze-blue/20 bg-white px-8 py-3 text-sm font-semibold text-breeze-blue transition hover:bg-breeze-lime/15"
            >
              Habla con soporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-breeze-lime/10" />
      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-breeze-teal/90">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-breeze-blue sm:text-4xl">
            Todo lo que necesitas saber antes de pedir Briz.
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          {FAQS.map(({ pregunta, respuesta }) => (
            <details
              key={pregunta}
              className="group rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/90"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-breeze-blue">
                {pregunta}
              </summary>
              <p className="mt-4 text-sm text-slate-600">{respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-breeze-dark px-4 py-12 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{PRODUCT_NAME}</p>
          <p className="mt-1 text-sm text-slate-400">
            Lima, Perú · Atención 24/7 en WhatsApp.
          </p>
        </div>
        <div className="text-xs text-slate-500">
          <p>Política: {POLITICA_TXT}</p>
          <p>&copy; {new Date().getFullYear()} Briz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
