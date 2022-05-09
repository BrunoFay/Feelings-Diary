
export default function useLocalStorage() {
  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }
  function removeItem(key) {
    localStorage.removeItem(key);
  }
  return { setItem, getItem, removeItem }
}
