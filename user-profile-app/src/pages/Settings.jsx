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
