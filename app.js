let addBtn = document.querySelector(".add");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

addBtn.addEventListener("click",function(){
    if(input.value!=""){
        let item = document.createElement("li");
        item.innerText = input.value;
        ul.appendChild(item);
        input.value ="";
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");
        item.appendChild(delBtn);
    }
    else{
        alert("Please Enter A Task.");
    }
});
ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});





// // let delBtns = document.querySelectorAll(".delete");
// // for(delBtn of delBtns) {
// //     delBtn.addEventListener("click", function () {
// //         let par = this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     });
// // }

