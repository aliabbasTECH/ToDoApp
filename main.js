// 
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML=today


//   <<<<<<<<<<<< todo APP >>>>>>>>>>>>>>>>>>>>>

var list=document.getElementById("list")

function AddLi(){
    // li tag with text node
    var inputTask= document.getElementById("intask");
    var li = document.createElement('li')
    var liText = document.createTextNode(inputTask.value)
        li.appendChild(liText)
// <<<<<<<<<<<<<<<<<<  date
   
   var p= document.createElement('i')
       p.setAttribute("class","task-date")
   var pText = document.createTextNode(today)
    p.appendChild(pText)
    li.appendChild(p)



//   <<<<<<<<<<<<<<<<<<<<<<<<<  creat edit btn
    var editBtn= document.createElement("i")
    var editText=document.createTextNode("")
    editBtn.setAttribute("class","fa fa-pencil-square-o")
    editBtn.setAttribute("aria-hidden","true")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

//   <<<<<<<<<<<<<<<<<<<<<<<<< creat delete butn

    var delBtn= document.createElement("i")
    var delText=document.createTextNode("")
    delBtn.setAttribute("class","fa fa-trash")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
     li.appendChild(delBtn)

    
//  <<<<<<<<<<<<<<<<<<<<<<<   empty input 
    list.appendChild(li)
    inputTask.value=""
    
}

//  edit ietm function

function editItem(e){
    
   var  edit= prompt("Enter edit Value",e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue=edit
    
}

// delete item function

function deleteItem(d){

    d.parentNode.remove()
}
// deleteall function
function deleteAll(){
    list.innerHTML =""
}

// edit