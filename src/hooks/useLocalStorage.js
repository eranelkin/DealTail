import { useState } from "react";

export const useLocalStorage = (keyName) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      return value ? JSON.parse(value) : null;
    } catch (err) {
      return null;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  const clearStorage = () => {
    try {
      window.localStorage.removeItem(keyName);
    } catch (err) {
      console.log("ERROR: remove from localStorage");
    }
    setStoredValue(null);
  };

  return [storedValue, setValue, clearStorage];
};
