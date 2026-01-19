/**
 * Strukturované logování pomocí console (pro produkci lze nahradit Pino)
 * V produkci se logy automaticky posílají do Vercel Logs
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

// * Nastavení aktuální úrovně logování.
const currentLevel = process.env.LOG_LEVEL === 'debug' ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO;
// * Detekce vývojového prostředí.
const isDevelopment = process.env.NODE_ENV === 'development';

// * Interní helper pro jednotný format logů.
function log(level, levelName, data) {
  // * Pokud je úroveň nižší než aktuální, nic neloguj.
  if (level < currentLevel) return;
  
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: levelName,
    ...(typeof data === 'string' ? { message: data } : data),
  };

  // * Rozdílný output pro dev/prod.
  if (isDevelopment) {
    console[levelName.toLowerCase()](JSON.stringify(logEntry, null, 2));
  } else {
    // * V produkci se logy automaticky posílají do Vercel Logs.
    console[levelName.toLowerCase()](JSON.stringify(logEntry));
  }
}

// * Export logger API.
export const logger = {
  debug: (data) => log(LOG_LEVELS.DEBUG, 'DEBUG', data),
  info: (data) => log(LOG_LEVELS.INFO, 'INFO', data),
  warn: (data) => log(LOG_LEVELS.WARN, 'WARN', data),
  error: (data) => log(LOG_LEVELS.ERROR, 'ERROR', data),
};

// * Default export loggeru.
export default logger;
