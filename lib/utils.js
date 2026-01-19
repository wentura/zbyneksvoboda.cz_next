/**
 * Escapuje HTML entity pro bezpečné zobrazení v HTML
 * @param {string} text - Text k escapování
 * @returns {string} Escapovaný text
 */
export function escapeHtml(text) {
  // * Pokud není text, vrať prázdný řetězec.
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

/**
 * Max délky pro validaci vstupů
 */
export const MAX_LENGTHS = {
  name: 200,
  email: 254, // RFC 5321
  phone: 50,
  website: 200,
  discussion: 5000
};

/**
 * Validuje délku pole
 * @param {string} field - Název pole
 * @param {string} value - Hodnota k validaci
 * @param {number} maxLength - Maximální délka
 * @throws {Error} Pokud je hodnota příliš dlouhá
 */
export function validateLength(field, value, maxLength) {
  // * Pokud hodnota přesahuje max, vyhoď chybu.
  if (value && value.length > maxLength) {
    throw new Error(`${field} je příliš dlouhé (max ${maxLength} znaků).`);
  }
}
