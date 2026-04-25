export interface Project {
  title: { de: string; en: string };
  period: string;
  role: { de: string; en: string };
  desc: { de: string; en: string };
  tags: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    title: { de: "Gestellpool (Frontend & Management)", en: "Gestellpool (Frontend & Management)" },
    period: "05/2024 - 04/2026",
    role: { de: "Frontend Developer / Projekt Manager", en: "Frontend Developer / Project Manager" },
    desc: {
      de: "App Weiterentwicklung und Wartung, Re-Design auf Android App auf Compose UI inkl. Umstellung und Migration veralteter Techniken.",
      en: "App development and maintenance, re-design of Android app to Compose UI including migration of legacy technologies."
    },
    tags: ["Flutter", "Dart", "Android Compose UI", "Mobile First"],
    icon: "bi-phone"
  },
  {
    title: { de: "Kitalino (Backend & DevOps)", en: "Kitalino (Backend & DevOps)" },
    period: "Seit 02/2022",
    role: { de: "Entwickler - Backend / DevOps", en: "Developer - Backend / DevOps" },
    desc: {
      de: "Aufbau von CI/CD inkl. firmeninterner Infrastruktur für multiarchitekturbasierte containerisierte Applikationen via Terraform/Terragrunt (K8s).",
      en: "Implementation of CI/CD including internal infrastructure for multi-architecture containerized applications via Terraform/Terragrunt (K8s)."
    },
    tags: ["Java", "Kotlin", "Terraform", "Kubernetes", "CI/CD"],
    icon: "bi-cloud-check"
  },
  {
    title: { de: "GdP (Lead Backend)", en: "GdP (Lead Backend)" },
    period: "10/2023 - 05/2024",
    role: { de: "Lead Backend Developer / Frontend Developer", en: "Lead Backend Developer / Frontend Developer" },
    desc: {
      de: "Neuschreiben des Backends und Frontends der GdP App (Headless Node.js). Automatisierte Datenupdates aus Excel via SQL.",
      en: "Complete rewrite of the GdP app backend and frontend (Headless Node.js). Automated data updates from Excel via SQL."
    },
    tags: ["Node.js", "PHP", "API-Design", "Docker"],
    icon: "bi-gear-wide-connected"
  },
  {
    title: { de: "VRM (Infrastruktur)", en: "VRM (Infrastructure)" },
    period: "03/2023 - 03/2023",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Erneutes anpassen des Grundsystems, Produktion neuer Paketversionen der Container Images und Sicherheitskonfiguration.",
      en: "Base system adjustments, production of new container image versions, and security configuration."
    },
    tags: ["Container", "Sicherheit", "Linux"],
    icon: "bi-shield-check"
  },
  {
    title: { de: "indiwa (Android & Architekt)", en: "indiwa (Android & Architect)" },
    period: "04/2021 - 01/2022",
    role: { de: "Projektverantwortlicher / führender Entwickler", en: "Project Lead / Lead Developer" },
    desc: {
      de: "Planung/Umsetzung der Architektur, Machinelearning mittels Google MLKit und dynamischer Aufbau nach Schnittstelleninhalten.",
      en: "Architectural planning and implementation, machine learning with Google MLKit, and dynamic UI based on API content."
    },
    tags: ["Android Native", "Kotlin", "MLKit", "Architektur"],
    icon: "bi-android2"
  },
  {
    title: { de: "GdP (Hilfsprogramm)", en: "GdP (Helper Tool)" },
    period: "11/2021 - 12/2021",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Umsetzung eines Hilfsprogrammes um einen Straftaten Katalog technisch zu verarbeiten (Excel zu SQL) via Python.",
      en: "Implementation of a helper tool to technically process a criminal offense catalog (Excel to SQL) via Python."
    },
    tags: ["Python", "VSCode", "Docker", "SQL"],
    icon: "bi-code-slash"
  },
  {
    title: { de: "Golden City Bremen (Web API)", en: "Golden City Bremen (Web API)" },
    period: "04/2021 - 06/2021",
    role: { de: "Softwarearchitect / Entwickler", en: "Software Architect / Developer" },
    desc: {
      de: "Umsetzung einer Buchungs-API für Reservierungen und Schnittstellen für Mobile Anwendungen inkl. Push-Benachrichtigungen.",
      en: "Implementation of a booking API for reservations and interfaces for mobile applications including push notifications."
    },
    tags: ["JavaScript", "API-Design", "Push-Notifications"],
    icon: "bi-calendar-check"
  },
  {
    title: { de: "Dekra / DataAutohus (Middleware)", en: "Dekra / DataAutohus (Middleware)" },
    period: "11/2018 - 05/2021",
    role: { de: "Anwendungsentwickler", en: "Application Developer" },
    desc: {
      de: "Umsetzung einer Middleware mit Ruby on Rails zur Anbindung von Infrastrukturen. Import/Export von Dokumenten (Bild, PDF, XML).",
      en: "Implementation of a middleware with Ruby on Rails for infrastructure integration. Document import/export (Images, PDF, XML)."
    },
    tags: ["Ruby on Rails", "SOAP", "MSSQL", "XML"],
    icon: "bi-diagram-3"
  },
  {
    title: { de: "Cyberfitness (AWS Media)", en: "Cyberfitness (AWS Media)" },
    period: "03/2021 - 05/2021",
    role: { de: "Anwendungsentwickler", en: "Application Developer" },
    desc: {
      de: "Konzeption und Umsetzung von videodatenbasiertem Livestreaming in AWS inkl. Adyen-Integration und Skalierungsmechanismen.",
      en: "Conception and implementation of video data-based livestreaming in AWS including Adyen integration and scaling mechanisms."
    },
    tags: ["Java", "AWS", "MediaLive", "OpenAPI"],
    icon: "bi-broadcast"
  },
  {
    title: { de: "Überseehub / Sparkasse (Android)", en: "Überseehub / Sparkasse (Android)" },
    period: "03/2020 - 02/2021",
    role: { de: "Anwendungsentwickler", en: "Application Developer" },
    desc: {
      de: "Umsetzung eines Kontoführungscompanions für Android und Backend zum Ausspielen von Inhalten.",
      en: "Implementation of a banking companion app for Android and a backend for content delivery."
    },
    tags: ["Android Native", "Kotlin", "Ruby on Rails", "Firebase"],
    icon: "bi-bank"
  },
  {
    title: { de: "Schmidt und Koch (Parkhaus)", en: "Schmidt und Koch (Parking)" },
    period: "11/2020 - 12/2020",
    role: { de: "Anwendungsentwickler", en: "Application Developer" },
    desc: {
      de: "Weiterentwicklung des Parkhausverwaltungssystems und Updates der verwendeten Komponenten.",
      en: "Further development of the parking lot management system and updates of used components."
    },
    tags: ["Java", "SQL", "Wartung"],
    icon: "bi-p-square"
  },
  {
    title: { de: "Clubverstärker (Events API)", en: "Clubverstärker (Events API)" },
    period: "04/2019 - 07/2020",
    role: { de: "Softwarearchitect / Entwickler", en: "Software Architect / Developer" },
    desc: {
      de: "Portierung von PHP Prototypen zu Ruby on Rails. Automatisierte Konzertevents via FacebookAPI abgreifen.",
      en: "Porting PHP prototypes to Ruby on Rails. Automated concert event scraping via Facebook API."
    },
    tags: ["Ruby on Rails", "FacebookAPI", "API-Design"],
    icon: "bi-music-note-beamed"
  },
  {
    title: { de: "Dekra (PHP Migration)", en: "Dekra (PHP Migration)" },
    period: "02/2020 - 02/2020",
    role: { de: "Anwendungsentwickler", en: "Application Developer" },
    desc: {
      de: "Anpassung an Hoster Anforderungen und Portierung mehrerer PHP 5.2 Anwendungen zu PHP 7.3.",
      en: "Adjustment to hoster requirements and porting of multiple PHP 5.2 applications to PHP 7.3."
    },
    tags: ["PHP", "Migration", "Server"],
    icon: "bi-server"
  },
  {
    title: { de: "Drivo (Telematics App)", en: "Drivo (Telematics App)" },
    period: "08/2019 - 11/2019",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Entwicklung einer Android App und Backend zur Aufzeichnung des persönlichen Fahrverhaltens im PKW.",
      en: "Development of an Android app and backend for recording individual driving behavior in cars."
    },
    tags: ["Android", "Kotlin", "Ruby on Rails"],
    icon: "bi-car-front"
  },
  {
    title: { de: "Rauch (Web Feature)", en: "Rauch (Web Feature)" },
    period: "06/2019 - 10/2019",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Umsetzung von neuen Anforderungen und Überarbeitung des Push-Benachrichtigungsmechanismus.",
      en: "Implementation of new requirements and revision of the push notification mechanism."
    },
    tags: ["Ruby on Rails", "JavaScript", "Push"],
    icon: "bi-window-stack"
  },
  {
    title: { de: "Hellmann Logistik (CI/CD)", en: "Hellmann Logistik (CI/CD)" },
    period: "04/2019 - 07/2019",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Digitalisierung von Schichtplänen und Arbeitsprozessen. CI/CD Automatisierung via Gitlab Pipelines.",
      en: "Digitalization of shift schedules and work processes. CI/CD automation via GitLab Pipelines."
    },
    tags: ["Ruby on Rails", "CI/CD", "Docker", "Logistik"],
    icon: "bi-truck"
  },
  {
    title: { de: "Schmidt und Koch (Fuhrpark)", en: "Schmidt und Koch (Fleet)" },
    period: "10/2018 - 03/2019",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Backend für Fuhrparkverwaltung und Anbindung autonomer Schranke via Websocket (Actioncable).",
      en: "Backend for fleet management and connection of an autonomous barrier via WebSocket (ActionCable)."
    },
    tags: ["Ruby on Rails", "Websocket", "Docker"],
    icon: "bi-barrier-edge"
  },
  {
    title: { de: "VRM (Migration)", en: "VRM (Migration)" },
    period: "02/2019 - 02/2019",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Verlagerung einer Bare Metal Anwendung in eine containerisierte Umgebung.",
      en: "Migration of a bare-metal application to a containerized environment."
    },
    tags: ["Bare Metal", "Docker", "Migration"],
    icon: "bi-box-seam"
  },
  {
    title: { de: "Hansetrans (OpenAPI)", en: "Hansetrans (OpenAPI)" },
    period: "02/2018 - 09/2018",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Integration von automatisierter Generierung der OpenAPI Dokumentation und Verbesserung des Kompilierprozesses.",
      en: "Integration of automated OpenAPI documentation generation and improvement of the compilation process."
    },
    tags: ["Ruby on Rails", "OpenAPI", "CI/CD"],
    icon: "bi-journal-text"
  },
  {
    title: { de: "GdP (RSS Feed)", en: "GdP (RSS Feed)" },
    period: "06/2018 - 07/2018",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Auslesen des RSS Feeds für die App-Nutzung (PHP Modul) und Korrektur falscher Zeichenkodierungen.",
      en: "Extracting the RSS feed for app use (PHP module) and correcting incorrect character encoding."
    },
    tags: ["PHP", "RSS", "SQL"],
    icon: "bi-rss"
  },
  {
    title: { de: "Maske Fleet (Fleet Server)", en: "Maske Fleet (Fleet Server)" },
    period: "03/2016 - 06/2018",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Weiterentwicklung des Maske Flow Servers in PHP (Codeigniter v2/v3) inkl. Nav-Integration.",
      en: "Further development of the Maske Flow server in PHP (Codeigniter v2/v3) including Nav integration."
    },
    tags: ["PHP", "Codeigniter", "Dynamics NAV"],
    icon: "bi-speedometer"
  },
  {
    title: { de: "Energiekontor (Umfrage App)", en: "Energiekontor (Survey App)" },
    period: "03/2018 - 04/2018",
    role: { de: "Softwarearchitect / Entwickler", en: "Software Architect / Developer" },
    desc: {
      de: "Umsetzen eines Umfragedienstes mit E-Mail Export Funktion auf Basis von Ruby on Rails.",
      en: "Implementation of a survey service with email export function based on Ruby on Rails."
    },
    tags: ["Ruby on Rails", "Email-Export", "Survey"],
    icon: "bi-envelope-check"
  },
  {
    title: { de: "GdP (Streifenhelfer)", en: "GdP (Streifenhelfer)" },
    period: "03/2018 - 03/2018",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Weiterentwicklung der PHP Anwendung und Ausgabe von Schnittstellen für die Streifenhelfer App.",
      en: "Further development of the PHP application and provision of interfaces for the Streifenhelfer app."
    },
    tags: ["PHP", "HTML", "Schnittstellen"],
    icon: "bi-shield-shaded"
  },
  {
    title: { de: "Kaefer Isoliertechnik (DPMS)", en: "Kaefer Isoliertechnik (DPMS)" },
    period: "03/2017 - 01/2018",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Weiterentwicklung des Digital Projectmanagement Systems (DPMS) via Ruby on Rails und Kendo UI.",
      en: "Further development of the Digital Project Management System (DPMS) via Ruby on Rails and Kendo UI."
    },
    tags: ["Ruby on Rails", "Kendo UI", "Docker"],
    icon: "bi-briefcase"
  },
  {
    title: { de: "Drivo (Telematik B2C)", en: "Drivo (Telematics B2C)" },
    period: "06/2016 - 02/2017",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Erstellung eines skalierbaren Serversystems in Ruby on Rails auf Heroku für Telematik-Daten.",
      en: "Creation of a scalable server system in Ruby on Rails on Heroku for telematics data."
    },
    tags: ["Ruby on Rails", "Heroku", "B2C"],
    icon: "bi-cloud-arrow-up"
  },
  {
    title: { de: "Drivo (Telematik B2B)", en: "Drivo (Telematics B2B)" },
    period: "09/2016 - 02/2017",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Weiterentwicklung des bestehenden B2B Servers mit Fokus auf Sicherheitsstandards und Performance.",
      en: "Further development of the existing B2B server with a focus on security standards and performance."
    },
    tags: ["Performance", "Sicherheit", "B2B"],
    icon: "bi-building"
  },
  {
    title: { de: "Dat Autohus (Intranet)", en: "Dat Autohus (Intranet)" },
    period: "02/2016 - 10/2016",
    role: { de: "Projektleitung", en: "Project Lead" },
    desc: {
      de: "Portierung der Intranet Software Webtool von PHP zu Ruby on Rails inkl. Microsoft Dynamics NAV.",
      en: "Porting the intranet software Webtool from PHP to Ruby on Rails including Microsoft Dynamics NAV."
    },
    tags: ["PHP", "Ruby on Rails", "Projektleitung"],
    icon: "bi-people"
  },
  {
    title: { de: "Lotto Bremen (Mobile)", en: "Lotto Bremen (Mobile)" },
    period: "12/2013 - 12/2015",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Entwicklung der Lotto App für Android/iOS (Sencha Touch) und des internen Backends.",
      en: "Development of the Lotto app for Android/iOS (Sencha Touch) and the internal backend."
    },
    tags: ["Android", "iOS", "Sencha Touch", "Hybrid"],
    icon: "bi-ticket-perforated"
  },
  {
    title: { de: "Cityinitiative Bremen (Web)", en: "Cityinitiative Bremen (Web)" },
    period: "03/2015 - 12/2015",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Unterstützung des Frontend Teams bei der Angular JS Entwicklung der Bremen City App.",
      en: "Support for the frontend team in Angular JS development for the Bremen City app."
    },
    tags: ["Angular JS", "Frontend", "JavaScript"],
    icon: "bi-house-heart"
  },
  {
    title: { de: "BMW Group (Edu-Games)", en: "BMW Group (Edu-Games)" },
    period: "11/2014 - 12/2015",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Entwicklung einer Lernapp (LibGDX) inkl. Automated Builds (Jenkins) und Speicheroptimierung.",
      en: "Development of an educational app (LibGDX) including automated builds (Jenkins) and memory optimization."
    },
    tags: ["Java", "LibGDX", "Game-Dev", "Jenkins"],
    icon: "bi-controller"
  },
  {
    title: { de: "Richter Gabelstapler (Mobile)", en: "Richter Gabelstapler (Mobile)" },
    period: "01/2015 - 04/2015",
    role: { de: "Support", en: "Support" },
    desc: {
      de: "Upgrade der Sencha Touch Oberfläche und Entwicklung einer Javascript Injection Bridge.",
      en: "Upgrade of the Sencha Touch interface and development of a JavaScript injection bridge."
    },
    tags: ["Sencha Touch", "Support", "Bridge"],
    icon: "bi-wrench-adjustable"
  },
  {
    title: { de: "ASB (Intranetwiki)", en: "ASB (Intranet Wiki)" },
    period: "10/2013 - 02/2014",
    role: { de: "Entwickler", en: "Developer" },
    desc: {
      de: "Entwicklung eines internen Wikis auf Basis von MediaWiki.",
      en: "Development of an internal wiki based on MediaWiki."
    },
    tags: ["MediaWiki", "Knowledge", "PHP"],
    icon: "bi-book"
  },
  {
    title: { de: "DSI / Aerospace (Admin)", en: "DSI / Aerospace (Admin)" },
    period: "01/2011 - 01/2012",
    role: { de: "Administration", en: "Administration" },
    desc: {
      de: "Administration und Systemhärtung der Flugsicherung Singapur inkl. Sicherheitsrichtlinien.",
      en: "Administration and system hardening of the Singapore air traffic control including security policies."
    },
    tags: ["Windows Server", "Sicherheit", "Aerospace"],
    icon: "bi-cpu-fill"
  },
  {
    title: { de: "DSI / Eurohawk (QA)", en: "DSI / Eurohawk (QA)" },
    period: "01/2011 - 06/2011",
    role: { de: "Test/QS", en: "Test/QA" },
    desc: {
      de: "Test der Steuerungs- und Sicherungssysteme inkl. Penetrationstest und Lokalisierung.",
      en: "Testing of control and safety systems including penetration tests and localization."
    },
    tags: ["QA", "Test", "Sicherheit"],
    icon: "bi-check2-circle"
  },
  {
    title: { de: "DSI (FPGA Server)", en: "DSI (FPGA Server)" },
    period: "06/2010 - 01/2011",
    role: { de: "Projektleitung", en: "Project Lead" },
    desc: {
      de: "Aufbau eines virtualisierten FPGA-Berechnungs-Servers auf Basis von Gentoo Linux und KVM.",
      en: "Setting up a virtualized FPGA calculation server based on Gentoo Linux and KVM."
    },
    tags: ["Gentoo Linux", "FPGA", "KVM", "Virtualisierung"],
    icon: "bi-motherboard"
  }
];
