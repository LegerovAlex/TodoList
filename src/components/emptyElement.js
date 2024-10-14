import { createElement } from "../utils/createElement";
import { render } from "../utils/render";


export function emptyElement() {
    

    const emptyElement = createElement("div", [document.createTextNode("Task list is empty")], {
         cssClass:["no-tasks-message"]
    })
     render(emptyElement, ".tasks-list")
    
}