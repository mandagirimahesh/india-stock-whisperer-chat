export class Logger {
  constructor(module) {
    this.module = module;
  }

  info(message) {
    console.log(`[${new Date().toISOString()}] [INFO] [${this.module}] ${message}`);
  }

  error(message) {
    console.error(`[${new Date().toISOString()}] [ERROR] [${this.module}] ${message}`);
  }

  warn(message) {
    console.warn(`[${new Date().toISOString()}] [WARN] [${this.module}] ${message}`);
  }

  debug(message) {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[${new Date().toISOString()}] [DEBUG] [${this.module}] ${message}`);
    }
  }
}