# 🌱 KisaanMitra AI

![KisaanMitra AI](https://img.shields.io/badge/KisaanMitra-AI%20Powered-green?style=for-the-badge&logo=android) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-Vertex%20AI-blue?style=for-the-badge&logo=googlecloud) ![Flutter](https://img.shields.io/badge/Flutter-Mobile%20First-02569B?style=for-the-badge&logo=flutter)

> *An expert in every farmer's pocket, a friend for life.*

**KisaanMitra AI** is an innovative mobile application concept that aims to empower small-scale Indian farmers with AI-driven insights, real-time market data, and voice-first interaction in local languages. Built for Google Cloud Agentic AI Day 2025, this project envisions bridging the technology gap for rural farming communities.

---

## 🚀 Project Overview

KisaanMitra AI addresses critical challenges faced by Indian farmers: crop disease identification, market price volatility, complex government schemes, and language barriers in accessing agricultural technology. Our AI-powered solution provides instant crop diagnosis, real-time mandi prices with forecasting, government scheme navigation, and expert consultation—all through a simple voice interface in local languages.

**Built for**: Google Cloud Agentic AI Day 2025 🏆

---

## ✨ Key Features

### 🔬 **Core AI Features**
- **📸 Crop Disease Detection**: Upload crop images for instant AI-powered disease diagnosis with treatment recommendations
- **📈 Real-time Mandi Prices**: Access current market rates with AI-powered price forecasting for better selling decisions
- **🏛️ Government Scheme Discovery**: Navigate complex subsidies and schemes with simple explanations and application assistance
- **🎤 Voice-First UI**: Complete voice interaction in Hindi, Kannada, Marathi, and other local languages
- **🗺️ Local Expert Network**: Find nearby agri-shops and connect with certified agricultural experts

### 🌟 **Additional Features**
- **📅 Expert Consultations**: Book one-on-one sessions with agricultural scientists and extension officers
- **🌦️ Weather Insights**: Localized weather forecasts integrated with farming recommendations
- **📚 Knowledge Base**: Access to farming best practices and seasonal guides
- **💬 Community Support**: Connect with fellow farmers in your region
- **📊 Farm Analytics**: Track crop health and productivity over time

---

## 🛠️ Tech Stack

### **Google Cloud Technologies**
- **🧠 Vertex AI Gemini**: Advanced AI reasoning and conversation
- **👁️ Vertex AI Vision**: Crop disease detection and image analysis
- **📊 Vertex AI Forecasting**: Market price prediction models
- **🎙️ Speech-to-Text API**: Multi-language voice recognition
- **🔊 Text-to-Speech API**: Natural voice responses in local languages

### **Firebase Ecosystem**
- **🔥 Firestore**: Real-time database for user data and insights
- **🔐 Firebase Authentication**: Secure user management
- **⚡ Cloud Functions**: Serverless backend processing
- **🌐 Firebase Hosting**: Web application deployment
- **📱 Firebase Studio**: Development and deployment management

### **Frontend & Mobile**
- **📱 Flutter**: Cross-platform mobile application
- **⚛️ React + TypeScript**: Landing page and web interface
- **🎨 Tailwind CSS**: Modern, responsive UI design
- **⚡ Vite**: Fast development and build tooling

### **External APIs**
- **🏪 Agmarknet API**: Official government mandi price data
- **🌍 OpenWeather API**: Localized weather information
- **📍 Google Maps API**: Location services for expert discovery

---

## 📱 Screenshots

<div align="center">

### 🎨 Mobile App Interface

| Splash Screen | Home Screen | Language Selection |
|:-------------:|:-----------:|:------------------:|
| <img src="./screenshots/splash_screen.png" alt="Splash Screen" width="250"/> | <img src="./screenshots/home_screen.png" alt="Home Screen" width="250"/> | <img src="./screenshots/language_screen.png" alt="Language Selection" width="250"/> |
| *Welcome screen with KisaanMitra branding* | *Main dashboard with quick access features* | *Multi-language support interface* |

| Crop Diagnosis | Market Prices | Voice AI Assistant |
|:--------------:|:-------------:|:------------------:|
| <img src="./screenshots/crop_dignosis.png" alt="Crop Disease Detection" width="250"/> | <img src="./screenshots/market_price.png" alt="Market Prices" width="250"/> | <img src="./screenshots/voice_ai.png" alt="Voice AI" width="250"/> |
| *AI-powered crop disease detection* | *Real-time mandi price information* | *Voice-first interaction interface* |

| Government Schemes | Nearby Shops | Weather Insights |
|:------------------:|:------------:|:----------------:|
| <img src="./screenshots/govt_schemes.png" alt="Government Schemes" width="250"/> | <img src="./screenshots/nearbyshop.png" alt="Nearby Shops" width="250"/> | <img src="./screenshots/weather.png" alt="Weather Insights" width="250"/> |
| *Government scheme navigation* | *Local agri-shop discovery* | *Weather forecasts with farming advice* |

| Expert Consultation | | |
|:-------------------:|:-:|:-:|
| <img src="./screenshots/expert_screen.png" alt="Expert Consultation" width="250"/> | | |
| *Connect with agricultural experts* | | |

</div>

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- Flutter SDK 3.0+
- Google Cloud Account with billing enabled
- Firebase project setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/kisanmitra-ai.git
cd kisanmitra-ai
```

### 2. Landing Page Setup
```bash
cd landing-page
npm install
npm run dev
```

### 3. Firebase Configuration
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Configure services: Firestore, Functions, Hosting
```

### 4. Google Cloud APIs Setup
Enable the following APIs in Google Cloud Console:
- Vertex AI API
- Speech-to-Text API
- Text-to-Speech API
- Vision AI API
- Forecasting API

### 5. Environment Variables
Create `.env` files with your API keys:
```bash
# .env.local (Landing Page)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_project_id

# .env (Flutter App)
GOOGLE_CLOUD_PROJECT_ID=your_project_id
VERTEX_AI_REGION=us-central1
```

### 6. Flutter App Setup
```bash
cd mobile-app
flutter pub get
flutter run
```

---

## 🌐 Deployment

### Landing Page (Firebase Hosting)
```bash
npm run build
firebase deploy --only hosting
```

### Mobile App
```bash
# Android
flutter build apk --release

# iOS
flutter build ios --release
```

### Firebase Functions
```bash
firebase deploy --only functions
```

**Live Demo**: [https://kisanmitra-ai.web.app](https://kisanmitra-ai.web.app)

---

## 👥 Team Information

### 🏆 Past Achievements
- **🥉 Google Solution Challenge 2024**: Global Top 3 Finalists


### 👨‍💻 Team Members
- **Shubham Pitekar** - Flutter & Full Stack Developer
- **Priyanshu Agrawal** - AI Agentic AI Developer
- **Sanika Chavan** - AI Engineer

---

## 📈 Current Status

- **👥 100+** farmers have shown interest in early access
- **� Prototype** development phase with core AI features
- **🎯 Target**: Supporting farmers across India with AI-powered insights
- **� Goal**: Launch pilot program in select regions

---

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Areas for Contribution
- 🌱 Additional crop disease models
- 🗣️ New language support
- 📊 Enhanced analytics features
- 🔧 Performance optimizations
- 📝 Documentation improvements

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- **📧 Email**: team@kisanmitra-ai.com
- **🐙 GitHub**: [github.com/kisanmitra-ai](https://github.com/kisanmitra-ai)
- **🐦 Twitter**: [@KisanMitraAI](https://twitter.com/KisanMitraAI)
- **💼 LinkedIn**: [KisanMitra AI](https://linkedin.com/company/kisanmitra-ai)

---

## 🙏 Acknowledgments

- **Google Cloud Team** for providing excellent AI/ML APIs
- **Firebase Team** for robust backend infrastructure
- **Indian Council of Agricultural Research (ICAR)** for agricultural expertise
- **Local farming communities** for valuable feedback and testing

---

<div align="center">

**Made with ❤️ for Indian Farmers**

*Empowering Agriculture Through AI*

![Farmer](https://img.shields.io/badge/Built%20For-Indian%20Farmers-saffron?style=for-the-badge) ![AI](https://img.shields.io/badge/Powered%20By-Google%20AI-blue?style=for-the-badge) ![Open Source](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>