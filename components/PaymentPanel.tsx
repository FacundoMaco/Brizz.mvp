"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import { buildWhatsAppLink } from "@/utils/wa";

type PaymentPanelProps = {
  amount: number;
  className?: string;
  plinNumber: string;
  productName?: string;
  qrImageSrc: string;
  whatsappMessage: string;
  whatsappNumber: string;
  yapeNumber: string;
};

export function PaymentPanel({
  amount,
  className,
  plinNumber,
  productName = "Briz",
  qrImageSrc,
  whatsappMessage,
  whatsappNumber,
  yapeNumber
}: PaymentPanelProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  const paymentNumber = yapeNumber || plinNumber;
  const formattedAmount = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2
  }).format(amount);

  const onCopyNumber = useCallback(async () => {
    if (!paymentNumber) {
      return;
    }

    try {
      await navigator.clipboard.writeText(paymentNumber);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch (error) {
      console.error("Clipboard copy failed", error);
      setCopyState("idle");
    }
  }, [paymentNumber]);

  const whatsappHref = buildWhatsAppLink({
    phone: whatsappNumber,
    message: whatsappMessage
  });

  const containerClass =
    "w-full rounded-[2.5rem] border border-breeze-blue/10 bg-white/95 p-8 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.65)] backdrop-blur";

  return (
    <section
      className={`${containerClass} ${className ?? ""}`.trim()}
      aria-label="Checkout Briz"
    >
      <div className="flex flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-breeze-teal/80">
            Checkout seguro
          </p>
          <h3 className="text-2xl font-semibold text-breeze-blue">
            Reserva tu {productName}
          </h3>
          <p className="text-sm text-slate-600">
            Confirmamos tu pedido al instante y coordinamos entrega en Lima en
            menos de 24 horas.
          </p>
        </header>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-breeze-blue/60">
          <span className="rounded-full bg-breeze-teal/10 px-3 py-1">Yape</span>
          <span className="rounded-full bg-breeze-teal/10 px-3 py-1">Plin</span>
          <span className="rounded-full bg-breeze-teal/10 px-3 py-1">
            Transferencia
          </span>
        </div>
          <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm shadow-breeze-blue/10">
            <div className="flex items-center justify-between text-sm font-semibold text-breeze-blue">
              <span>{productName}</span>
              <span>{formattedAmount}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Incluye dispositivo Briz sin batería listo para usar.</li>
              <li>Recibe 3 cápsulas de aromas naturales de regalo.</li>
              <li>Coordinamos sabores y entrega premium por WhatsApp.</li>
            </ul>
          </div>
          <div className="flex-1 rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm shadow-breeze-blue/10">
            <div className="flex items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={qrImageSrc}
                  alt="QR de pago Yape o Plin"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-breeze-blue">
                  Escanéalo con Yape o Plin
                </p>
                <p>Monto: {formattedAmount}</p>
                <p>Número Yape: {yapeNumber || "Completar"}</p>
                <p>Número Plin: {plinNumber || "Completar"}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                data-gtm-event="payment-copy-number"
                onClick={onCopyNumber}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-breeze-blue/20 bg-white px-4 py-3 text-sm font-semibold text-breeze-blue transition hover:bg-breeze-lime/10"
              >
                {copyState === "copied" ? "Número copiado" : "Copiar número"}
              </button>
              <a
                data-gtm-event="payment-whatsapp"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-breeze-teal px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-breeze-teal/90"
              >
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          *Aceptamos transferencias bancarias. Si necesitas factura, indícanos
          al finalizar el pago.
        </p>
      </div>
    </section>
  );
}
