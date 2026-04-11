# Lokaler Entwicklungs-Workflow (HMR)

Dieses Dokument beschreibt, wie die lokale Web-Entwicklung in diesem Projekt heute durch **Vite** und **Svelte 5** funktioniert.

## Der Live-Server ("Hot Module Replacement")

Früher (bei Tools wie Webpack oder reinen Node-Servern) musste das Projekt oft bei jeder kleinen Änderung manuell neu gebaut und der Browser aktualisiert werden. Heute ist das dank dem Konzept des **Live-Servers (HMR - Hot Module Replacement)** hinfällig.

### Den Live-Server starten

Um Änderungen "Live" beim Programmieren zu sehen, starte den Entwicklungs-Server über dein Terminal in diesem Ordner mit:

```bash
yarn dev
```

*(Alternativ: `npm run dev`)*

Sobald du das tust:
1. Startet Vite einen lokalen Webserver, der fast augenblicklich verfügbar ist (meist unter http://localhost:5173).
2. Du öffnest diesen Link in deinem Browser.
3. Stell das Terminalfenster in den Hintergrund und öffne deinen VSCode-Editor.

### Was passiert im Hintergrund, wenn du speicherst?

Was du damals beobachtet hast, läuft heute durch Vite noch viel schneller und ressourcenschonender:

1. **Vite "beobachtet" (Watch Mode)**: Vite überwacht deinen Ordner (`src/`) auf Änderungen.
2. **Svelte Kompilierung**: Speicherst du z.B. eine Anpassung an der `App.svelte` Datei, fängt das installierte `@sveltejs/vite-plugin-svelte` diese Änderung blitzschnell auf und wandelt nur diese eine Svelte-Datei in normales JavaScript und CSS um.
3. **Websocket-Push**: Anstatt deinen gesamten Browser neu zu laden, schießt Vite ein kleines "Update-Paket" via Websockets in den Hintergrund deines geöffneten Browser-Tabs. 
4. **DOM Patching**: Das veraltete Modul in der Webseite wird "on the fly" ersetzt (gepatcht), ohne die restliche Seite neuzuladen oder deinen laufenden State (wie in Eingabefeldern) zu leeren!

---

## Produktions-Build & Preview

Die Seite "richtig" fertigbauen (bündeln, verkleinern etc.) zur echten Auslieferung übernimmt derselbe Mechanismus, den unser IONOS Workflow nutzt:

```bash
yarn build
```

Willst du dir lokal jedoch das **fertige Endprodukt** (nach dem Build) anschauen, um zu garantieren, dass es auch in Produktion 1:1 so läuft, nutzt du:

```bash
yarn serve
```

*Das simuliert und hostet deinen produzierten `/dist` Ordner lokal auf einem frischen Port.*
