export interface TimelineItem {
  year: string;
  title: { de: string; en: string };
  company: { de: string; en: string };
  desc: { de: string; en: string };
}

export const timelineItems: TimelineItem[] = [
  {
    year: "02/2016 – Heute",
    title: { de: "Softwareentwickler", en: "Software Developer" },
    company: { de: "neusta mobile solutions GmbH", en: "neusta mobile solutions GmbH" },
    desc: {
      de: "Fullstack-Entwickler für Android und Web-Anwendungen\nCross-Plattform-Entwicklung mit Flutter\nBackend-Entwicklung mit Ruby on Rails und Spring Boot\nCloud-Infrastruktur und DevOps\nCI/CD-Pipelines und Automatisierung",
      en: "Full-stack developer for Android and web applications\nCross-platform development with Flutter\nBackend development with Ruby on Rails and Spring Boot\nCloud infrastructure and DevOps\nCI/CD pipelines and automation"
    }
  },
  {
    year: "01/2016 – 01/2016",
    title: { de: "Vertiefung & Orientierung", en: "Deepening & Orientation" },
    company: { de: "", en: "" },
    desc: {
      de: "Vertiefung in Android App Entwicklung und REST-Serverdiensten",
      en: "Deepening knowledge in Android app development and REST server services"
    }
  },
  {
    year: "03/2014 – 12/2015",
    title: { de: "Anwendungsentwickler und Programmierer", en: "Application Developer & Programmer" },
    company: { de: "BBN GmbH", en: "BBN GmbH" },
    desc: {
      de: "Konzept und Entwicklung von Android Mobile Apps\nBackend- und Intranet-Systeme\n2D Spieleentwicklung\nAdministration von Kundenservern",
      en: "Concept and development of Android mobile apps\nBackend and intranet systems\n2D game development\nAdministration of client servers"
    }
  },
  {
    year: "02/2013 – 02/2014",
    title: { de: "Weiterbildungsstudium Softwareentwicklung", en: "Postgraduate Software Development" },
    company: { de: "Universität Bremen", en: "University of Bremen" },
    desc: {
      de: "Objektorientierte Programmierung mit Java, Softwaretechnik, Datenbanken und Webanwendungen.",
      en: "Object-oriented programming with Java, software engineering, databases, and web applications."
    }
  },
  {
    year: "01/2011 – 01/2012",
    title: { de: "Systemadministrator", en: "Systems Administrator" },
    company: { de: "DSI Informationstechnik GmbH", en: "DSI Informationstechnik GmbH" },
    desc: {
      de: "Administration und Systemhärtung, Sicherheitsrichtlinien.",
      en: "Administration and system hardening, security policies."
    }
  },
  {
    year: "06/2009 – 06/2011",
    title: { de: "Umschulung zum Fachinformatiker", en: "Retraining: IT Specialist" },
    company: { de: "cbm GmbH / DSI GmbH", en: "cbm GmbH / DSI GmbH" },
    desc: {
      de: "Fachrichtung Systemintegration.",
      en: "Specialization: Systems Integration."
    }
  }
  // Weitere Einträge können hier nach gleichem Muster ergänzt werden
];
