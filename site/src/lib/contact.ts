/**
 * contact.ts — THE contact channels. One place for the number, the WhatsApp deep links
 * and the public email. Header CTA, footer, contact page, pricing card and JSON-LD all
 * read from here; nothing hard-codes a phone number or address.
 *
 * Owner values (decision T10). Swap the email for a @vantflow.tech mailbox here when it
 * exists — every page updates.
 */
export const contact = {
  /** E.164, no spaces — used for tel: and wa.me. */
  phoneE164: '+213791192350',
  /** Display form. */
  phoneDisplay: '+213 791 19 23 50',
  email: 'anesch829@gmail.com',
  /** Reply promise shown next to the channels. */
  replyWindow: 'Replies within two business days',
} as const;

const wa = (text: string) => `https://wa.me/${contact.phoneE164.replace('+', '')}?text=${encodeURIComponent(text)}`;

export const whatsApp = {
  general: wa('Hi VANTFLOW — I\u2019d like to discuss SEO.'),
  audit: wa('Hi VANTFLOW — I\u2019d like to book the SEO audit.'),
} as const;

export const telHref = `tel:${contact.phoneE164}`;
export const mailHref = `mailto:${contact.email}`;
