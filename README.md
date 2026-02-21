# 🌾 Mulyam — Commodity Price Entry System

Mulyam is a production-style web application designed for market staff to record daily commodity prices efficiently. It provides secure authentication using Google Single Sign-On (SSO) and stores data in a cloud database using Firebase Firestore.

---

## 🚀 Features

- 🔐 Google Sign-In Authentication (SSO)
- 👤 Automatic user email capture
- 📅 Automatic current date capture
- 🧾 Commodity-based dependent dropdown fields
- ☁️ Cloud storage using Firebase Firestore
- 🔄 Session persistence (no repeated login)
- 🎯 Clean and responsive user interface
- 🏭 Designed for real-world market data entry

---

## 🧠 Use Case

Field staff visiting markets can quickly enter commodity prices along with relevant attributes such as source location, size, and quality. All entries are securely stored in the cloud along with the user identity and timestamp.

---

## 🏗️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend / Cloud Services
- Firebase Authentication (Google SSO)
- Firebase Firestore Database

### Tools & Environment
- Git & GitHub
- Visual Studio Code
- Live Server (for local testing)

---

## 🔐 Authentication

The application uses Google OAuth via Firebase Authentication.

- Secure login using Google account
- User email automatically retrieved
- Session maintained across page refreshes
- No manual password management required

---

## 🗄️ Database Structure (Firestore)

Collection: `prices`

Each document contains the following fields:

- commodity  
- sourceLocation  
- size  
- quality  
- price  
- date  
- email  

---

## 📸 Screenshots

![Mulyam Home Page](https://github.com/user-attachments/assets/2f6808ea-3f0a-4a4b-8bba-91d9b69f0b0f)

---

## 👨‍💻 Author

Tejas Hiwarale  

🔗 LinkedIn: https://www.linkedin.com/in/tejas-hiwarale-4385a0318  
