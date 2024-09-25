# DreamMall Assistant

## Überblick
Der DreamMall Assistant ist ein KI-gestützter Chatbot, der entwickelt wurde, um Benutzern bei der Navigation und Interaktion mit der DreamMall-Plattform zu helfen. Er nutzt das GPT-2 Modell von Hugging Face, um kontextbezogene und hilfreiche Antworten zu generieren.

## Aktueller Konzeptstatus
- **Phase**: Proof of Concept / Prototyp
- **Funktionalität**: Grundlegende Frage-Antwort-Interaktion
- **Modell**: GPT-2 (via Hugging Face API)
- **Frontend**: Vue.js mit Vuetify
- **Backend**: Node.js mit Express

## Projektstruktur
```
DreamMall-Assistant/
├── frontend/
│   ├── index.html
│   └── app.js
├── backend/
│   ├── server.js
│   ├── model.js
│   └── .env
└── README.md
```

## Setup und Installation

### Voraussetzungen
- Node.js (v14 oder höher)
- npm (v6 oder höher)
- Ein Hugging Face Account mit API-Zugang

### Installation
1. Klonen Sie das Repository:
   ```
   git clone https://github.com/yourusername/DreamMall-Assistant.git
   cd DreamMall-Assistant
   ```

2. Installieren Sie die Backend-Abhängigkeiten:
   ```
   cd backend
   npm install
   ```

3. Erstellen Sie eine `.env` Datei im `backend` Verzeichnis und fügen Sie Ihren Hugging Face API-Schlüssel hinzu:
   ```
   HUGGINGFACE_API_KEY=Ihr_API_Schlüssel
   ```

4. Starten Sie den Backend-Server:
   ```
   node server.js
   ```

5. Öffnen Sie in einem neuen Terminal-Fenster das Frontend:
   ```
   cd ../frontend
   ```

6. Starten Sie einen einfachen HTTP-Server für das Frontend (z.B. mit Python):
   ```
   python -m http.server 8000
   ```

7. Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:8000`

## Verwendung
Geben Sie Ihre Frage oder Anweisung in das Textfeld ein und klicken Sie auf "Senden". Der Assistant wird versuchen, eine hilfreiche Antwort zu generieren.

## Nächste Schritte
- Integration spezifischer DreamMall-Funktionen und -Daten
- Verbesserung der Antwortqualität durch Feinabstimmung des Modells
- Implementierung von Benutzer-Authentifizierung und -Autorisierung
- Erweiterung der Frontend-Funktionalität (z.B. Verlaufsspeicherung, Themenkategorisierung)

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die LICENSE.md Datei für Details.
