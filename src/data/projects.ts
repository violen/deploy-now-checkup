export interface Project {
  title: string;
  period: string;
  role: string;
  desc: string;
  tags: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Gestellpool (Frontend & Management)",
    period: "05/2024 - 04/2026",
    role: "Frontend Developer / Projekt Manager",
    desc: "App Weiterentwicklung und Wartung, Re-Design auf Android App auf Compose UI inkl. Umstellung und Migration veralteter Techniken.",
    tags: ["Flutter", "Dart", "Android Compose UI", "Mobile First"],
    icon: "bi-phone"
  },
  {
    title: "Kitalino (Backend & DevOps)",
    period: "Seit 02/2022",
    role: "Entwickler - Backend / DevOps",
    desc: "Aufbau von CI/CD inkl. firmeninterner Infrastruktur für multiarchitekturbasierte containerisierte Applikationen via Terraform/Terragrunt (K8s).",
    tags: ["Java", "Kotlin", "Terraform", "Kubernetes", "CI/CD"],
    icon: "bi-cloud-check"
  },
  {
    title: "GdP (Lead Backend)",
    period: "10/2023 - 05/2024",
    role: "Lead Backend Developer / Frontend Developer",
    desc: "Neuschreiben des Backends und Frontends der GdP App (Headless Node.js). Automatisierte Datenupdates aus Excel via SQL.",
    tags: ["Node.js", "PHP", "API-Design", "Docker"],
    icon: "bi-gear-wide-connected"
  },
  {
    title: "VRM (Infrastructure)",
    period: "03/2023 - 03/2023",
    role: "Entwickler",
    desc: "Erneutes anpassen des Grundsystems, Produktion neuer Paketversionen der Container Images und Sicherheitskonfiguration.",
    tags: ["Container", "Sicherheit", "Linux"],
    icon: "bi-shield-check"
  },
  {
    title: "indiwa (Android & Architekt)",
    period: "04/2021 - 01/2022",
    role: "Projektverantwortlicher / führender Entwickler",
    desc: "Planung/Umsetzung der Architektur, Machinelearning mittels Google MLKit und dynamischer Aufbau nach Schnittstelleninhalten.",
    tags: ["Android Native", "Kotlin", "MLKit", "Architektur"],
    icon: "bi-android2"
  },
  {
    title: "GdP (Hilfsprogramm)",
    period: "11/2021 - 12/2021",
    role: "Entwickler",
    desc: "Umsetzung eines Hilfsprogrammes um einen Straftaten Katalog technisch zu verarbeiten (Excel zu SQL) via Python.",
    tags: ["Python", "VSCode", "Docker", "SQL"],
    icon: "bi-code-slash"
  },
  {
    title: "Golden City Bremen (Web API)",
    period: "04/2021 - 06/2021",
    role: "Softwarearchitect / Entwickler",
    desc: "Umsetzung einer Buchungs-API für Reservierungen und Schnittstellen für Mobile Anwendungen inkl. Push-Benachrichtigungen.",
    tags: ["JavaScript", "API-Design", "Push-Notifications"],
    icon: "bi-calendar-check"
  },
  {
    title: "Dekra / DataAutohus (Middleware)",
    period: "11/2018 - 05/2021",
    role: "Anwendungsentwickler",
    desc: "Umsetzung einer Middleware mit Ruby on Rails zur Anbindung von Infrastrukturen. Import/Export von Dokumenten (Bild, PDF, XML).",
    tags: ["Ruby on Rails", "SOAP", "MSSQL", "XML"],
    icon: "bi-diagram-3"
  },
  {
    title: "Cyberfitness (AWS Media)",
    period: "03/2021 - 05/2021",
    role: "Anwendungsentwickler",
    desc: "Konzeption und Umsetzung von videodatenbasiertem Livestreaming in AWS inkl. Adyen-Integration und Skalierungsmechanismen.",
    tags: ["Java", "AWS", "MediaLive", "OpenAPI"],
    icon: "bi-broadcast"
  },
  {
    title: "Überseehub / Sparkasse (Android)",
    period: "03/2020 - 02/2021",
    role: "Anwendungsentwickler",
    desc: "Umsetzung eines Kontoführungscompanions für Android und Backend zum Ausspielen von Inhalten.",
    tags: ["Android Native", "Kotlin", "Ruby on Rails", "Firebase"],
    icon: "bi-bank"
  },
  {
    title: "Schmidt und Koch (Parkhaus)",
    period: "11/2020 - 12/2020",
    role: "Anwendungsentwickler",
    desc: "Weiterentwicklung des Parkhausverwaltungssystems und Updates der verwendeten Komponenten.",
    tags: ["Java", "SQL", "Wartung"],
    icon: "bi-p-square"
  },
  {
    title: "Clubverstärker (Events API)",
    period: "04/2019 - 07/2020",
    role: "Softwarearchitect / Entwickler",
    desc: "Portierung von PHP Prototypen zu Ruby on Rails. Automatisierte Konzertevents via FacebookAPI abgreifen.",
    tags: ["Ruby on Rails", "FacebookAPI", "API-Design"],
    icon: "bi-music-note-beamed"
  },
  {
    title: "Dekra (PHP Migration)",
    period: "02/2020 - 02/2020",
    role: "Anwendungsentwickler",
    desc: "Anpassung an Hoster Anforderungen und Portierung mehrerer PHP 5.2 Anwendungen zu PHP 7.3.",
    tags: ["PHP", "Migration", "Server"],
    icon: "bi-server"
  },
  {
    title: "Drivo (Telematics App)",
    period: "08/2019 - 11/2019",
    role: "Entwickler",
    desc: "Entwicklung einer Android App und Backend zur Aufzeichnung des persönlichen Fahrverhaltens im PKW.",
    tags: ["Android", "Kotlin", "Ruby on Rails"],
    icon: "bi-car-front"
  },
  {
    title: "Rauch (Web Feature)",
    period: "06/2019 - 10/2019",
    role: "Entwickler",
    desc: "Umsetzung von neuen Anforderungen und Überarbeitung des Push-Benachrichtigungsmechanismus.",
    tags: ["Ruby on Rails", "JavaScript", "Push"],
    icon: "bi-window-stack"
  },
  {
    title: "Hellmann Logistik (CI/CD)",
    period: "04/2019 - 07/2019",
    role: "Entwickler",
    desc: "Digitalisierung von Schichtplänen und Arbeitsprozessen. CI/CD Automatisierung via Gitlab Pipelines.",
    tags: ["Ruby on Rails", "CI/CD", "Docker", "Logistik"],
    icon: "bi-truck"
  },
  {
    title: "Schmidt und Koch (Fuhrpark)",
    period: "10/2018 - 03/2019",
    role: "Entwickler",
    desc: "Backend für Fuhrparkverwaltung und Anbindung autonomer Schranke via Websocket (Actioncable).",
    tags: ["Ruby on Rails", "Websocket", "Docker"],
    icon: "bi-barrier-edge"
  },
  {
    title: "VRM (Migration)",
    period: "02/2019 - 02/2019",
    role: "Entwickler",
    desc: "Verlagerung einer Bare Metal Anwendung in eine containerisierte Umgebung.",
    tags: ["Bare Metal", "Docker", "Migration"],
    icon: "bi-box-seam"
  },
  {
    title: "Hansetrans (OpenAPI)",
    period: "02/2018 - 09/2018",
    role: "Entwickler",
    desc: "Integration von automatisierter Generierung der OpenAPI Dokumentation und Verbesserung des Kompilierprozesses.",
    tags: ["Ruby on Rails", "OpenAPI", "CI/CD"],
    icon: "bi-journal-text"
  },
  {
    title: "GdP (RSS Feed)",
    period: "06/2018 - 07/2018",
    role: "Entwickler",
    desc: "Auslesen des RSS Feeds für die App-Nutzung (PHP Modul) und Korrektur falscher Zeichenkodierungen.",
    tags: ["PHP", "RSS", "SQL"],
    icon: "bi-rss"
  },
  {
    title: "Maske Fleet (Fleet Server)",
    period: "03/2016 - 06/2018",
    role: "Entwickler",
    desc: "Weiterentwicklung des Maske Flow Servers in PHP (Codeigniter v2/v3) inkl. Nav-Integration.",
    tags: ["PHP", "Codeigniter", "Dynamics NAV"],
    icon: "bi-speedometer"
  },
  {
    title: "Energiekontor (Survey App)",
    period: "03/2018 - 04/2018",
    role: "Softwarearchitect / Entwickler",
    desc: "Umsetzen eines Umfragedienstes mit E-Mail Export Funktion auf Basis von Ruby on Rails.",
    tags: ["Ruby on Rails", "Email-Export", "Survey"],
    icon: "bi-envelope-check"
  },
  {
    title: "GdP (Streifenhelfer)",
    period: "03/2018 - 03/2018",
    role: "Entwickler",
    desc: "Weiterentwicklung der PHP Anwendung und Ausgabe von Schnittstellen für die Streifenhelfer App.",
    tags: ["PHP", "HTML", "Schnittstellen"],
    icon: "bi-shield-shaded"
  },
  {
    title: "Kaefer Isoliertechnik (DPMS)",
    period: "03/2017 - 01/2018",
    role: "Entwickler",
    desc: "Weiterentwicklung des Digital Projectmanagement Systems (DPMS) via Ruby on Rails und Kendo UI.",
    tags: ["Ruby on Rails", "Kendo UI", "Docker"],
    icon: "bi-briefcase"
  },
  {
    title: "Drivo (Telematics B2C)",
    period: "06/2016 - 02/2017",
    role: "Entwickler",
    desc: "Erstellung eines skalierbaren Serversystems in Ruby on Rails auf Heroku für Telematik-Daten.",
    tags: ["Ruby on Rails", "Heroku", "B2C"],
    icon: "bi-cloud-arrow-up"
  },
  {
    title: "Drivo (Telematics B2B)",
    period: "09/2016 - 02/2017",
    role: "Entwickler",
    desc: "Weiterentwicklung des bestehenden B2B Servers mit Fokus auf Sicherheitsstandards und Performance.",
    tags: ["Performance", "Sicherheit", "B2B"],
    icon: "bi-building"
  },
  {
    title: "Dat Autohus (Intranet)",
    period: "02/2016 - 10/2016",
    role: "Projektleitung",
    desc: "Portierung der Intranet Software Webtool von PHP zu Ruby on Rails inkl. Microsoft Dynamics NAV.",
    tags: ["PHP", "Ruby on Rails", "Projektleitung"],
    icon: "bi-people"
  },
  {
    title: "Lotto Bremen (Mobile)",
    period: "12/2013 - 12/2015",
    role: "Entwickler",
    desc: "Entwicklung der Lotto App für Android/iOS (Sencha Touch) und des internen Backends.",
    tags: ["Android", "iOS", "Sencha Touch", "Hybrid"],
    icon: "bi-ticket-perforated"
  },
  {
    title: "Cityinitiative Bremen (Web)",
    period: "03/2015 - 12/2015",
    role: "Entwickler",
    desc: "Unterstützung des Frontend Teams bei der Angular JS Entwicklung der Bremen City App.",
    tags: ["Angular JS", "Frontend", "JavaScript"],
    icon: "bi-house-heart"
  },
  {
    title: "BMW Group (Edu-Games)",
    period: "11/2014 - 12/2015",
    role: "Entwickler",
    desc: "Entwicklung einer Lernapp (LibGDX) inkl. Automated Builds (Jenkins) und Speicheroptimierung.",
    tags: ["Java", "LibGDX", "Game-Dev", "Jenkins"],
    icon: "bi-controller"
  },
  {
    title: "Richter Gabelstapler (Mobile)",
    period: "01/2015 - 04/2015",
    role: "Support",
    desc: "Upgrade der Sencha Touch Oberfläche und Entwicklung einer Javascript Injection Bridge.",
    tags: ["Sencha Touch", "Support", "Bridge"],
    icon: "bi-wrench-adjustable"
  },
  {
    title: "ASB (Intranetwiki)",
    period: "10/2013 - 02/2014",
    role: "Entwickler",
    desc: "Entwicklung eines internen Wikis auf Basis von MediaWiki.",
    tags: ["MediaWiki", "Knowledge", "PHP"],
    icon: "bi-book"
  },
  {
    title: "DSI / Aerospace (Admin)",
    period: "01/2011 - 01/2012",
    role: "Administration",
    desc: "Administration und Systemhärtung der Flugsicherung Singapur inkl. Sicherheitsrichtlinien.",
    tags: ["Windows Server", "Sicherheit", "Aerospace"],
    icon: "bi-cpu-fill"
  },
  {
    title: "DSI / Eurohawk (QA)",
    period: "01/2011 - 06/2011",
    role: "Test/QS",
    desc: "Test der Steuerungs- und Sicherungssysteme inkl. Penetrationstest und Lokalisierung.",
    tags: ["QA", "Test", "Sicherheit"],
    icon: "bi-check2-circle"
  },
  {
    title: "DSI (FPGA Server)",
    period: "06/2010 - 01/2011",
    role: "Projektleitung",
    desc: "Aufbau eines virtualisierten FPGA-Berechnungs-Servers auf Basis von Gentoo Linux und KVM.",
    tags: ["Gentoo Linux", "FPGA", "KVM", "Virtualisierung"],
    icon: "bi-motherboard"
  }
];
