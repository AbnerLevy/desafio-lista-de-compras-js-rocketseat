const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");


addButton.addEventListener('click',(e)=>{
    
    const itemTyped = itemInput.value

    if (itemTyped.trim() === "") {
       alert("Por favor, digite algo antes de adicionar!");
       return;
   }

    const newLi = document.createElement("li");
    newLi.classList.add("item");

    newLi.innerHTML=`<label>
                        <input type="checkbox" class="item-checkbox">
                        <span class="item-name">${itemTyped}</span>
                     </label>

                    <button class="remove-button" title="Remover item">
                      🗑
                    </button>`

    const checkboxInterna = newLi.querySelector(".item-checkbox");

    checkboxInterna.addEventListener('click', () => {
        if (checkboxInterna.checked == true) {
            newLi.classList.add("completed"); 
        } else {
            newLi.classList.remove("completed");
        }
    });

    const btnremove = newLi.querySelector(".remove-button");
    
    btnremove.addEventListener('click', ()=>{
        newLi.remove();
    });

    itemList.appendChild(newLi);

    itemInput.value="";

});