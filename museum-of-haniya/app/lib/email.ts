export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const isEmailConfigured =
  Boolean(EMAILJS_CONFIG.serviceId) &&
  Boolean(EMAILJS_CONFIG.templateId) &&
  Boolean(EMAILJS_CONFIG.publicKey);
