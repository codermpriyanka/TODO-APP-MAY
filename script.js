let inputs=document.getElementById("inp")
let text=document.querySelector(".text")
function Add(){
    if(inputs.value==""){
        alert("Please write something")
    }else{
        let newEle=document.createElement("ul")
        // console.log(newEle)
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener('click',remove);
        function remove(){
            newEle.remove()
        }
    }
}
