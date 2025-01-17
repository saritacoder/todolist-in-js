const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("first enter");
    }else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// while click on cross sign , the ele should be deleted

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
         saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


// this fun is for showing in UI after refreshing or doing any action and this data coming from localstorage

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();