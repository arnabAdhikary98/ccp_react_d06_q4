# 🧑‍💻 User Profile App using Context API (Vite + React)

## ✅ Objective

Manage global user state using Context API and React Router.

## 🚀 Steps

### Step 1: Create Vite React App

```bash
npm create vite@latest user-profile-app -- --template react
cd user-profile-app
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

### Step 2: Create folders and files

In `src/`, create:

* `context/UserContext.jsx`
* `components/Navbar.jsx`
* `pages/Home.jsx`
* `pages/Profile.jsx`
* `pages/Settings.jsx`

### Step 3: Create UserContext

`src/context/UserContext.jsx`

```jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

### Step 4: Setup context and router

`src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
```

### Step 5: Create App and Navbar

`src/App.jsx`

```jsx
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
```

`src/components/Navbar.jsx`

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
```

### Step 6: Home Page

`src/pages/Home.jsx`

```jsx
function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome to User Profile App</h2>
      <p>This app uses Context API to manage user data globally.</p>
    </div>
  );
}

export default Home;
```

### Step 7: Profile Page

`src/pages/Profile.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
```

### Step 8: Settings Page

`src/pages/Settings.jsx`

```jsx
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Settings() {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ ...user, name, email });
    alert("Profile updated!");
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;
```

### Step 9: Run your app

```bash
npm run dev
```

### ✅ You’re done!

* `/` → Home page
* `/profile` → Show user data
* `/settings` → Update user data

---