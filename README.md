# Disney+ Clone - React Application

A Disney+ inspired streaming application built using React, Firebase, Redux Toolkit, and modern frontend technologies.

This project recreates the Disney+ user experience with a responsive interface, Firebase authentication, dynamic movie data, and category-based movie collections.

---

## Features

- Google authentication using Firebase Authentication
- Firebase Firestore integration for movie data
- Redux Toolkit for global state management
- React Router navigation
- Responsive Disney+ inspired UI
- Dynamic movie categories:
  - Recommended
  - New Disney Releases
  - Originals
  - Trending
- Movie details page
- Image carousel slider
- Firebase hosting configuration

---

## Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- React Router
- Redux Toolkit
- Styled Components
- CSS3
- React Slick

### Backend Services

- Firebase Authentication
- Firebase Firestore
- Firebase Hosting

### Tools

- npm
- Git
- GitHub

---

## Project Structure

```
Disney-main/
├── public/
│   ├── images/
│   ├── video/
│   └── index.html
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── Home.js
│   │   ├── Detail.js
│   │   ├── SliderImage.js
│   │   ├── Viewrs.js
│   │   ├── Trending.js
│   │   ├── NewDisney.js
│   │   ├── Recomanded.js
│   │   └── Orignals.js
│   │
│   ├── features/
│   │   ├── movie/
│   │   │   └── movieSlice.js
│   │   │
│   │   └── user/
│   │       └── userSlice.js
│   │
│   ├── Firebase.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
├── firebase.json
└── .env.example
```

---

## Application Flow

### Authentication Flow

```
User
 |
 v
Firebase Authentication
 |
 v
Redux Store
 |
 v
Home Page
```

Users authenticate using Firebase Google Sign-In. After successful authentication, user information is stored in Redux and the user is redirected to the application dashboard.

### Movie Data Flow

```
Firebase Firestore
 |
 v
Home.js
 |
 v
Redux Store
 |
 v
Movie Categories
 |
 v
UI
```

Movie data is fetched from Firestore and divided into different categories before rendering.

---

## Screens

### Login Screen

The login page provides:

- Disney+ inspired background
- Branding section
- Firebase authentication integration

### Home Screen

The home page contains:

- Navigation header
- Hero slider
- Brand categories
- Movie collections

### Movie Details

Users can open individual movies and view:

- Movie title
- Description
- Background image
- Additional movie information

---

## Installation

Clone the repository:

```bash
git clone https://github.com/DevKanishk/Disney.git
```

Navigate to the project:

```bash
cd Disney
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root (same folder as `package.json`) with your Firebase config:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

A `.env.example` file is included as a template — copy it to `.env` and fill in your own Firebase project values. Never commit your real `.env` file to version control.

---

## Running the Project

Start the development server:

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000).

### Windows / PowerShell notes

If PowerShell blocks the `npm` script with an error like:

```
npm : File cannot be loaded because running scripts is disabled on this system.
```

Run PowerShell as Administrator once and execute:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then retry `npm install` / `npm start`.

If you hit an OpenSSL error on newer Node.js versions:

```
error:0308010C:digital envelope routines::unsupported
```

Run this as a one-off workaround:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a deployable bundle in the `build/` folder, ready for Firebase Hosting or any static host.

---

## Deployment (Firebase Hosting)

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

Make sure `firebase.json` is configured to point at the `build` directory before deploying.

---

## License

This project is for educational purposes only and is not affiliated with, endorsed by, or connected to The Walt Disney Company.