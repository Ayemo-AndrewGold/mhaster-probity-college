import { CONTACT } from "./constants";

const whatsappPhone = CONTACT.phones[0].replace(/\D/g, "");

export const SITE_CONFIG = {
  whatsappUrl: `https://wa.me/${whatsappPhone}`,
  hiddenWidgetPaths: [] as string[],
} as const;
