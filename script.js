let doList = document.querySelector("#to-do-list");
let addBtn = document.querySelector("#add-form button");
let addInput = document.querySelector("#add-form input");
let searchInput = document.querySelector("#search-form input");

doList.addEventListener("click" , (e)=>{
    if(e.target.className == "delete-btn"){
        e.target.parentNode.remove();
        if(doList.children.length == 0){
            let emptyMsg = document.createElement("div");
            emptyMsg.style.fontSize = '16px';
            emptyMsg.style.textAlign = "center";
            emptyMsg.innerText = "list is empty";
            emptyMsg.id = "emptyMsg";
            doList.appendChild(emptyMsg);
        }
    }
});

addBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(!addInput.value){
        return
    }
    if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove();
    }
    doList.appendChild(createListItem(addInput.value));
    addInput.value = '';
})

searchInput.addEventListener("input" , (e)=>{
    Array.from(doList.children).forEach((element)=>{
        if (document.querySelector("#emptyMsg")){
            return
        }
        if(!element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "none";
        }
        else{
            element.style.display = "flex";
        }
    })
})

function createListItem(element){
    let newlist = document.createElement("li");
    let title = document.createElement("span");
    let deleteBtn = document.createElement("span");
    
    title.className = "title";
    title.innerText = element;

    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "delete";

    newlist.appendChild(title);
    newlist.appendChild(deleteBtn);
    return newlist;
}