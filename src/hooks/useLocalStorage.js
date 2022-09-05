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
      setStoredValue(newValue);
    } catch (err) {
      setStoredValue(null);
    }
  };

  const clearStorage = () => {
    try {
      window.localStorage.removeItem(keyName);
      setStoredValue(null);
    } catch (err) {
      console.log("ERROR: remove from localStorage");
    }
  };

  return [storedValue, setValue, clearStorage];
};
