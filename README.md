📱 Student Lead Management App (Mini CRM)

A simple React Native (Expo) application built as part of the Ative Internship screening assignment.
The app allows users to manage student leads with basic CRUD operations and local data persistence.

🚀 Features Implemented

➕ Add student leads using a form

📋 View list of all leads (FlatList)

🔍 View lead details

🗑️ Delete a lead

🧭 Navigation between screens using React Navigation

✅ Basic form validation (name, phone, email)

💾 Persistent storage using AsyncStorage

🔔 Toast notifications for user feedback

🛠️ Tech Stack

React Native (Expo)

React Hooks

React Navigation (Stack Navigator)

AsyncStorage

react-native-toast-message

📂 Folder Structure
student-crm/
│
├── App.js
├── index.js
├── app.json
├── package.json
├── README.md
│
├── src/
│   ├── context/
│   │   └── LeadContext.js
│   │
│   ├── navigation/
│   │   └── StackNavigator.js
│   │
│   └── screens/
│       ├── HomeScreen.js
│       ├── AddLeadScreen.js
│       └── LeadDetailScreen.js
│
└── assets/

🧭 Screens Overview
🏠 Home Screen

Displays all leads using FlatList

Navigate to Add Lead screen

Tap a lead to view details

➕ Add Lead Screen

Form with validations:

Name (required, alphabets only)

Phone (required, 10 digits)

Email (optional, valid format)

Toast messages for success/error

📄 Lead Detail Screen

View full lead information

Delete lead functionality

▶️ Setup Instructions

Clone the repository

git clone <your-github-repo-link>


Navigate to the project directory

cd student-crm


Install dependencies

npm install


Start the app

npx expo start


Run on:

Android Emulator

Physical device using Expo Go

🎥 Demo (Screen Recording)

A short screen recording demonstrating all major features of the app:

🔗 Demo Video:
https://share.zight.com/8Luz0e1O

📝 Notes

Data is stored locally using AsyncStorage (persists even after app restart)

Focus was kept on clean code, functionality, and usability

UI kept simple as per assignment instructions

👤 Author

Abhishek Raj
React Native / MERN Stack Developer
