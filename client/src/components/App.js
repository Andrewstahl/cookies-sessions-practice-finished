import '../App.css';
import React, { useState, useEffect } from 'react';
import Login from './LoginPage';

export default function App() {
  const [user, setUser] = useState(null)

  // Upon page start/refresh, it will make a get
  // request to the "/me" URL, which should show
  useEffect(() => {
    fetch("/me").then((r) => {
      console.log(r)
      if (r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  if (user === null) {
    return <Login onLogin={setUser} />
  }
  
  return (
    <div className="App">
      <h1>Welcome, {user.username}</h1>
      <button className="logout-button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
}