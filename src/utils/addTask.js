import { createTask } from "../components/taskElement"
import { calcCount } from "./calcCount"
import { loadFromLocalStorage } from "./loadFromLocalStorage"
import { saveToLocalStorage } from "./saveToLocalStorage"
import { store } from "./store"
import { updateEmptyMessage } from "./updateEmptyMessage"

const inputElement = document.querySelector(".add-task__input")
const addForm = document.querySelector(".add-task__form")


addForm.addEventListener("submit", (event)=> {
     event.preventDefault()
  
    const value = inputElement.value.trim()
    if(value.length == 0) {
        return
    } 
    const task = {
        id:Date.now(),
        value:value,
        completed:false
    }
  
    store.push(task)
    createTask(task)
    inputElement.value = ""
    calcCount()
    saveToLocalStorage()
    updateEmptyMessage()

})


document.addEventListener("DOMContentLoaded", ()=> {
    loadFromLocalStorage()
    updateEmptyMessage()
})