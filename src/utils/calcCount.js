import { store } from "./store"

export function calcCount() {
   const countElement = document.querySelector(".tasks-section__created-count")
   const completedCountElement = document.querySelector(".tasks-section__completed-count")
   const completedTaskCount = store.filter((item)=> item.completed).length
   completedCountElement.textContent = `${completedTaskCount} of ${store.length}`
   countElement.textContent = store.length
}

