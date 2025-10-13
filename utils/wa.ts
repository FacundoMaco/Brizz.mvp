type BuildWhatsAppLinkParams = {
  message: string;
  phone: string;
};

const WHATSAPP_BASE_URL = "https://wa.me";

export function buildWhatsAppLink({ message, phone }: BuildWhatsAppLinkParams) {
  const sanitizedPhone = phone.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `${WHATSAPP_BASE_URL}/${sanitizedPhone}?text=${encodedMessage}`;
}
