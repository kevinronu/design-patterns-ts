function getDateString(): string {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const hourOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const weekDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };

  const fullOptions: Intl.DateTimeFormatOptions = {
    ...dateOptions,
    ...hourOptions,
    ...weekDayOptions,
  };

  return new Date().toLocaleDateString(locale, fullOptions);
}

export default class GalacticCommandCenter {
  public static instance: GalacticCommandCenter;
  private logs: string[];

  private constructor() {
    this.logs = [];
    this.logs.push(
      `[${getDateString()}] 🛰️  Galactic Command Center initialized.`
    );
  }

  public static getInstance(): GalacticCommandCenter {
    if (!GalacticCommandCenter.instance) {
      GalacticCommandCenter.instance = new GalacticCommandCenter();
    }

    return GalacticCommandCenter.instance;
  }

  public logEvent(eventMessage: string) {
    const logMessage = `[${getDateString()}] ${eventMessage}`;

    this.logs.push(logMessage);
  }

  public showLogs() {
    console.log("📡 Command Center Logs:");
    this.logs.forEach((log) => {
      console.log(log);
    });
  }
}
