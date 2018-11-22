enum NgxLoggerLevel {
  TRACE = 0,
  DEBUG,
  INFO,
  LOG,
  WARN,
  ERROR,
  OFF,
}

export class NgLogConfig {
  environment: boolean;
  level?: NgxLoggerLevel;
  serverLogLevel?: NgxLoggerLevel;
  serverLoggingUrl?: string;
}
