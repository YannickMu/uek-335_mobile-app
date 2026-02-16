## 1️⃣ Fitness-/Schrittzähler-App (mit Sensor)

### 💡 Idee

Eine App, die Schritte zählt, einfache Statistiken anzeigt und Ziele speichert.

### 📱 Screens

1. **Home** – Aktuelle Schritte + Tagesziel
2. **Statistik** – Verlauf (z.B. Diagramm der letzten 7 Tage)
3. **Einstellungen** – Ziel ändern, Daten zurücksetzen

### ⚙ Komplexe Komponente

* Bewegungssensor / Schrittzähler (z.B. Expo Sensors oder Health API)
* Persistenz mit AsyncStorage oder SQLite

### ✅ Warum gut?

* Sensor = technisch interessant
* Offline machbar
* Realistischer Scope für 3 Tage

---

## 2️⃣ Wetter-App mit Standort

### 💡 Idee

Eine Wetter-App, die automatisch deinen Standort erkennt und das Wetter anzeigt.

### 📱 Screens

1. **Aktuelles Wetter**
2. **7-Tage-Vorhersage**
3. **Favoriten-Städte**

### ⚙ Komplexe Komponente

* Geolocation (GPS)
* Externe API (z.B. OpenWeather)
* AsyncStorage für Favoriten

### ✅ Warum gut?

* API + Standort → komplex genug
* Sehr präsentationsstark
* Klar strukturierbar

---

## 3️⃣ Budget-Tracker (mit Persistenz)

### 💡 Idee

Eine App zum Verwalten von Einnahmen und Ausgaben.

### 📱 Screens

1. **Übersicht (Saldo + letzte Transaktionen)**
2. **Transaktion hinzufügen**
3. **Statistik (z.B. Diagramm nach Kategorien)**

### ⚙ Komplexe Komponente

* Lokale Datenbank (SQLite)
* Diagramm-Komponente
* Persistenz

### ✅ Warum gut?

* Kein Internet nötig
* Gut für UI-Design
* Professioneller Eindruck

---

## 4️⃣ Lernkarten-App (mit Offline-Speicherung)

### 💡 Idee

Flashcards zum Lernen (z.B. für Prüfungen)

### 📱 Screens

1. **Kategorien-Übersicht**
2. **Lernmodus**
3. **Karte hinzufügen/bearbeiten**

### ⚙ Komplexe Komponente

* AsyncStorage oder SQLite
* Fortschritt speichern
* Optional: Spaced Repetition Logik

### ✅ Warum gut?

* Logiklastig
* Sehr gut erweiterbar
* Wenig externe Abhängigkeiten

---

## 5️⃣ Mini-Soziale App (API-basiert)

### 💡 Idee

App mit Fake-Posts von einer öffentlichen API (z.B. JSONPlaceholder)

### 📱 Screens

1. **Feed**
2. **Detailansicht**
3. **Profilseite**

### ⚙ Komplexe Komponente

* REST API
* Loading/Error Handling
* Pull-to-refresh

### ✅ Warum gut?

* Klassische App-Struktur
* API-Handling wird bewertet
* Realistische Architektur

---

# 🎯 Meine Empfehlung für 3 Tage

Wenn du **auf Sicherheit gehen willst**:

👉 **Budget-Tracker** oder **Wetter-App**

Wenn du **technisch glänzen willst**:

👉 **Fitness-App mit Sensor**

---

---


# 🥇 1. Smart Fitness Tracker (sehr stark für Bewertung)

## 📱 Screens

1. Dashboard (Schritte + Ziel)
2. Statistik (Verlauf als Chart)
3. Einstellungen

## ⚙ Komplexe Komponenten

✅ **Sensor (Accelerometer / Pedometer)**
✅ **Persistenz (AsyncStorage oder SQLite)**

Optional Bonus:

* Diagramm (react-native-chart-kit)
* Dark Mode

## Warum sehr gut?

* Technisch anspruchsvoll
* Keine API-Abhängigkeit
* Offline-fähig
* Bewertet meistens sehr gut

---

# 🥈 2. Wetter-App Pro

## 📱 Screens

1. Aktuelles Wetter
2. Forecast
3. Favoriten

## ⚙ Komplexe Komponenten

✅ **Externe API (OpenWeather)**
✅ **Geolocation (GPS)**

Optional:

* Favoriten speichern (AsyncStorage → sogar 3. komplexe Komponente 😄)

## Warum gut?

* API + GPS = zwei klar erkennbare komplexe Features
* Sehr präsentierbar

Risiko:

* Internet notwendig
* API-Key & Fehlerhandling

---

# 🥉 3. Budget Tracker Advanced (sehr sicher)

## 📱 Screens

1. Übersicht
2. Neue Transaktion
3. Statistik

## ⚙ Komplexe Komponenten

✅ **SQLite Datenbank**
✅ **Charts / Datenvisualisierung**

Optional:

* Export als JSON
* Kategorien-Management

Warum gut?

* Kein Internet nötig
* Sehr stabil umsetzbar
* Wirkt professionell

---

# 🏅 4. Location-Based Places App

## 📱 Screens

1. Karte mit Orten
2. Detailansicht
3. Favoriten

## ⚙ Komplexe Komponenten

✅ **Maps (react-native-maps)**
✅ **Geolocation**
oder
✅ **API (z.B. Places API)**

Risiko:

* Maps kann manchmal tricky sein
* API Limits

---

# 💡 Meine ehrliche Empfehlung

Wenn du:

* sicher bestehen willst → **Budget Tracker**
* Eindruck machen willst → **Fitness App**
* moderne App zeigen willst → **Wetter + GPS**

---

# 🔥 Wenn ich dein Dozent wäre…

Am besten wirkt:

> Sensor + Persistenz
> oder
> API + Geolocation

Das sind klar erkennbare komplexe Features.

---
