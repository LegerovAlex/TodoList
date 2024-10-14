import { store } from "./store"
import { emptyElement } from "../components/emptyElement"


export function updateEmptyMessage() {
    const noTasksMessage = document.querySelector(".no-tasks-message");

    if (store.length === 0) {
        if (!noTasksMessage) {
            emptyElement(); 
        }
    } else if (noTasksMessage) {
        noTasksMessage.remove(); 
        

    }
}