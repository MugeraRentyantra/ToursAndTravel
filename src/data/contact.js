// ============================================
// SWARANJALI TRAVELS — CONTACT DATA (SINGLE SOURCE)
// ============================================

export const businessPhone = '9067886738'; // primary WhatsApp & call number
export const businessPhoneFormatted = '+91 90678 86738';

export const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Proton Office, Saidpur, Karad' },
  { icon: '📞', label: 'Phone', value: businessPhoneFormatted },
  { icon: '✉️', label: 'Email', value: 'proton@gmail.com' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 6:00 PM' },
];

export const socialLinks = {
  facebook: 'https://facebook.com/swaranjalitravels',
  instagram: 'https://instagram.com/swaranjalitravels',
  twitter: 'https://twitter.com/swaranjalitravels',
  youtube: '#',
};

/**
 * Generate a WhatsApp deep link with a pre-filled message.
 * @param {string} message — the message body (URL-encoded automatically)
 * @returns {string} — full wa.me URL
 */
export function getWhatsAppLink(message = '') {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${businessPhone}?text=${encoded}`;
}
