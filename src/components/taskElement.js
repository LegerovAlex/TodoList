import { createElement } from "../utils/createElement";
import trash from "/img/trash.svg"
import { render } from "../utils/render";
 
export function createTask(task) {
     const inputElement = createElement("input", [] , {
        cssClass: ["tasks-list__checkbox"],
        attrs: {
            type: "checkbox",
        }
     })
     if(task.completed) {
        inputElement.checked = true
     }

     const textElement = createElement("div", [document.createTextNode(task.value)], {
        cssClass:["tasks-list__text"]
        
     })

    if(task.completed) {
        textElement.classList.add('active')
    }


    const  imgElement = createElement("img", [], {
        attrs: {
            src: trash,
            alt: "delete task"
        }
    })

    const btnElement = createElement("button", [imgElement], {
        cssClass:["tasks-list__delete-btn"]
    } )


    const liElement = createElement("li", [inputElement, textElement, btnElement], {
        cssClass: ["tasks-list__item"],
        attrs: {
            id: task.id
        }
    })

   render(liElement, ".tasks-list")

}