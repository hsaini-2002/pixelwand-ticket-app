# Pixelwand Ticket Booking App

This is a multi-screen mobile application for ticket booking, built using React Native, Expo, and TypeScript. It features a modular structure, state management with React Context, and a mock API backend.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Setup and Running](#setup-and-running)
- [Troubleshooting](#troubleshooting)

## Features

- Browse a list of events.
- View detailed information for each event.
- Book tickets for events.
- State management for booking details.

## Architecture

The application follows a modular architecture to ensure separation of concerns, scalability, and maintainability. Key architectural decisions include:

-   **React Native & Expo:** For cross-platform mobile development, leveraging Expo for a streamlined development workflow.
-   **TypeScript:** For type safety and improved code quality.
-   **React Navigation:** For managing navigation between different screens.
-   **React Context API:** For global state management (e.g., booking details), avoiding prop drilling and centralizing state logic.
-   **Axios:** For making HTTP requests to the backend API.
-   **JSON Server:** Used as a mock backend API for development purposes, providing a simple REST API over a `db.json` file.

## Folder Structure

The project is organized into the following main directories:

```
pixelwand-ticket-app/
├── assets/               # Static assets like images and fonts
├── components/           # Reusable UI components (e.g., EventCard, Button)
├── context/              # React Context for global state management (e.g., BookingContext)
├── screens/              # Top-level screen components (e.g., HomeScreen, EventDetailScreen)
├── services/             # API service integrations (e.g., api.ts for JSON Server)
├── types/                # TypeScript type definitions (e.g., Event, Booking)
├── App.tsx               # Main application component
├── db.json               # JSON file for mock API data
├── app.json              # Expo application configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation (this file)
```

## Setup and Running

Follow these steps to set up and run the project locally:

### Prerequisites

-   Node.js (LTS version recommended)
-   npm or Yarn
-   Expo CLI (`npm install -g expo-cli`)
-   Watchman (`brew install watchman` on macOS, or equivalent for your OS)
-   Android Studio (for Android emulator/device setup and SDK tools)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd pixelwand-ticket-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Android SDK Environment Variables (if using Android emulator/device)

If you are using an Android emulator or a physical Android device, you need to ensure your Android SDK path is correctly configured. Add the following lines to your shell's configuration file (e.g., `~/.zshrc` or `~/.bashrc`):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

**Note:** Replace `/Users/yourusername/Library/Android/sdk` with your actual Android SDK location found in Android Studio's SDK Manager.

After adding these lines, save the file and restart your terminal or run `source ~/.zshrc` (or `source ~/.bashrc`).

### 4. Start the Mock API Server

This project uses `json-server` as a mock API. Open a **new terminal window** and run:

```bash
npm run start:api
```

The API will be running at `http://localhost:3000`. If you are running the app on a physical Android device or an emulator that needs to access your host machine's IP, you might need to update the `API_URL` in `src/services/api.ts` to your local network IP address (e.g., `http://192.168.1.4:3000`).

### 5. Start the Expo Application

Open another **new terminal window** and run:

```bash
npx expo start --clear
```

This will start the Metro bundler. You can then:

-   Scan the QR code with the Expo Go app on your physical device (Android or iOS).
-   Press `a` to open on an Android emulator.
-   Press `i` to open on an iOS simulator.
-   Press `w` to open in a web browser.

## Troubleshooting

### "Too many open files" error

If you encounter a "too many open files" error when starting Expo, try the following:

1.  **Increase file limits:**
    ```bash
    ulimit -n 65536
    ```
    Add this line to your `~/.zshrc` (or `~/.bashrc`) file to make it permanent.

2.  **Install and reset Watchman:**
    ```bash
    brew install watchman
    watchman shutdown-server
    watchman watch-del "$(pwd)"
    ```

3.  **Clear caches and reinstall:**
    ```bash
    npm cache clean --force
    rm -rf node_modules package-lock.json
    npm install
    npx expo start --clear
    ```

### "AxiosError: Network Error" on Android device

If your Android device (emulator or physical) gets a network error when fetching data, but the JSON server is running and accessible from your computer's browser, try the following:

1.  **Verify API_URL in `src/services/api.ts`:** Ensure `API_URL` uses your computer's local IP address (e.g., `http://192.168.1.4:3000`) instead of `http://localhost:3000`.

2.  **Check network connectivity from Android device:** Open a browser on your Android device/emulator and navigate to the API endpoint (e.g., `http://192.168.1.4:3000/events`). If you see the JSON data, the network connection is fine.

3.  **Clear Expo Go app data on emulator/device:**
    *   **For Emulator (from your computer's terminal):**
        ```bash
        adb shell pm clear host.exp.exponent
        ```
    *   **For Physical Device (manually):** Go to Device Settings -> Apps -> Expo Go -> Storage -> Clear Data/Cache.

4.  **Clear Expo project cache and restart:**
    ```bash
    npx expo start --clear
    ```

This comprehensive guide should help anyone set up and run your project, and troubleshoot common issues. 

Now, let's stage and commit all your changes. 