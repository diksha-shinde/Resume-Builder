
 function addNewfield(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
   let weOb =  document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
 function addNewAQfield(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
   let aqOb =  document.getElementById("aq");
    newNode.setAttribute("placeholder","Enter here");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}



function generateCV(){
   let Namefield = document.getElementById('Namefield').value;
   let nameT = document.getElementById('nameT');
   nameT.innerHTML=Namefield;
   document.getElementById('nameT2').innerHTML = Namefield;
  document.getElementById("ContactT").innerHTML = document.getElementById("contactfield").value;
  let contactfield = document.getElementById('contactfield').value;
  let ContactT = document.getElementById('ContactT');
 ContactT.innerHTML=contactfield;
  document.document.getElementById("addressT").innerHTML = document.getElementById("adfield").value;
   document.document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield:aws" ).value;
   document.document.getElementById('fbT').innerHTML = document.getElementById(
    "fbfield").value;
   document.document.getElementById('objectiveT').innerHTML = document.getElementById(
    "objectivefield").value;
   let wes=document.getElementsByClassName('wefield'); 
   let str=""
  for(e of wes)
{
    str=str+'<li> ${e.value} </li>';
}
    document.getElementsByClassName('weT').innerHTML = str;
document.getElementsByClassName(aqField);
let str1=''
 for(let e of aqs)
 {
    str1=str1+'<li> ${e.value} </li>';
}
document.getElementById('aqT').innerHTML=str1;
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
 }

 function printCV(){
    window.print();
 }