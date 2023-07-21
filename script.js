let doList = document.querySelector("#to-do-list");


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