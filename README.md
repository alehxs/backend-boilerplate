# Node.js Weather App (Backend + Frontend)

## Overview
This repository contains a simple **Node.js backend** and a **React frontend** application. The backend fetches weather data from the OpenWeatherMap API, and the frontend displays this information.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js (version 16 or higher)**
  - Verify installation by running:
    ```sh
    node -v
    ```
  - If not installed, download from [https://nodejs.org](https://nodejs.org)

- **npm (Node Package Manager)**
  - Included with Node.js installation.
  - Verify installation:
    ```sh
    npm -v
    ```

- **Git** (to clone this repository)
  - Verify installation:
    ```sh
    git --version
    ```
  - If not installed, download from [https://git-scm.com](https://git-scm.com)

---

## Setup Instructions

### Step 1: Clone the Repository

Open your terminal and run:

```sh
git clone https://github.com/alehxs/backend-boilerplate
cd backend-boilerplate
```

### Step 2: Install Dependencies

Inside the repository directory, install dependencies for both backend and frontend:

```sh
cd backend
npm install
cd ../frontend
npm install
cd ..
```

This ensures both backend and frontend dependencies are installed.

---

## Running the Application

### Start Backend Server

Ensure the API key is provided inside `backend/server.js`. Replace `API_KEY` with your OpenWeatherMap API key:

```js
const API_KEY = 'your_actual_api_key_here';
```

Then, start the backend:

```sh
cd backend
node server.js
```

You should see:

```
Server running on port 3001
```

### Start Frontend React App

In a separate terminal window, run:

```sh
cd frontend
npm run dev
```

Open your browser to [http://localhost:5173](http://localhost:5173) (or the port provided in the console) to view the weather app.

---

## Troubleshooting (Edge Cases)

- **Port conflicts**: Ensure nothing else is running on ports `3001` (backend) or frontend ports (`5173` or `3000`). Close conflicting applications if necessary.
- **API Key Missing or Invalid**: Ensure you've added your valid OpenWeatherMap API key in `backend/server.js`:

```js
const API_KEY = 'your-api-key-here';
```

- **CORS Error**: If your frontend cannot fetch data, ensure the backend server is running on the correct port (`3001`). Check console logs for more details.

- **Network Issues**: Make sure you have an active internet connection, as the backend needs to fetch external data from OpenWeatherMap API.

---

## Testing the Backend

To quickly test your backend independently (optional):

- Open Postman or a browser and visit:

```
http://localhost:3001/weather
```

You should receive JSON-formatted weather data.

---

## Troubleshooting Common Errors

- **'EADDRINUSE' Error**: Indicates port is already in use. Choose a different port or close the app using it.
- **'Fetch error' in React console**: Ensure the backend server is running properly on port `3001`.

---

## Need Help?

If you encounter issues, please raise an issue in this repository or ask questions during the workshop session!

Happy Coding!

