import { createTask } from "../components/taskElement";
import { calcCount } from "./calcCount";
import { store } from "./store";
import { updateEmptyMessage } from "./updateEmptyMessage";

export function loadFromLocalStorage() {
  const tasks =  JSON.parse(localStorage.getItem("tasks"))
  
  if(tasks.length != 0) {
    tasks.forEach(element => {
        store.push(element)
        createTask(element) 
     

    });
  }
  calcCount()
  updateEmptyMessage()
}