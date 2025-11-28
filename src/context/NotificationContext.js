import React, { createContext, useContext, useState } from "react";


const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  
  const addNotification = (msg) => {
    setNotifications((prev) => [...prev, msg]);
  };

  
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}


export function useNotifications() {
  return useContext(NotificationContext);
}
