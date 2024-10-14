import { saveToLocalStorage } from "./saveToLocalStorage"
import { store } from "./store"
import { calcCount } from "./calcCount"
const tasksContainer = document.querySelector(".tasks-list")



tasksContainer.addEventListener("click", ((event)=> {
    if(!event.target.classList.contains("tasks-list__checkbox")) return

    let item = event.target.closest(".tasks-list__item")

    const taskIndex = store.findIndex((task)=> task.id === Number(item.getAttribute("id")))
    const task = store[taskIndex]
    const taskText = item.querySelector(".tasks-list__text")
    taskText.classList.toggle("active")
    task.completed = !task.completed
    calcCount()
    saveToLocalStorage()

}))