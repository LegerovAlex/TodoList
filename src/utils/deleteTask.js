import { store } from "./store"
import { saveToLocalStorage } from "./saveToLocalStorage"
import { calcCount } from "./calcCount"
import { updateEmptyMessage } from "./updateEmptyMessage"

const tasksContainer = document.querySelector(".tasks-list")



tasksContainer.addEventListener("click", ((event)=> {
    if(!event.target.closest(".tasks-list__delete-btn")) return

    let item = event.target.closest(".tasks-list__item")
    const taskIndex = store.findIndex((task)=> task.id === Number(item.getAttribute("id")))
    store.splice(taskIndex, 1)
    item.remove()
    calcCount()
    saveToLocalStorage()
    updateEmptyMessage()
}))