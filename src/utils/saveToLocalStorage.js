import { store } from "./store";

export function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(store))    
} 