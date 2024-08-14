
function thanks(){
    document.querySelector(".emojis").remove();
    const para=document.createElement('p');
    document.querySelector(".reaction").appendChild(para);
    para.innerText="Thank you";
    para.classList.add("para");
    
}

function showNav(){
    const navBar=document.querySelector(".dropdown-main");
    if(navBar.style.display==="none"){
        navBar.style.display="block" ;
    }else{
        navBar.style.display="none" ;
    }

}

function showDropdownA(){
    const  dropdownA=document.querySelector(".dropdownA");
    const openIcon=document.querySelector(".fa-angle-down");
    const closeIcon=document.querySelector(".fa-chevron-right")
    let open =false;


    if(dropdownA.style.display==="none"  && open==false ){
        dropdownA.style.display="block" ;
        open=true;
  
        
    }else{
        dropdownA.style.display="none" ;
        open=false;
  
    }
    if(open){
        openIcon.style.display="block";
        closeIcon.style.display="none";
    }else{
        openIcon.style.display="none";
        closeIcon.style.display="block"; 
    }
}
function showli1(){
    const openIcon=document.querySelector(".fa-angle-down");
    const closeIcon=document.querySelector(".fa-chevron-right")
    let open =false;
    
    const li1=document.querySelector(".li1");
    if(li1.style.display==="none"  && open==false ){
        li1.style.display="block";
        open=true; 
    }else{
        li1.style.display="none" 
        open=false;
    }
    if(open){
        openIcon.style.display="block";
        closeIcon.style.display="none";
    }else{
        openIcon.style.display="none";
        closeIcon.style.display="block"; 
    }
}
function showli2(){
    const li2=document.querySelector(".li2");
    if(li2.style.display==="none"){
        li2.style.display="block" 
    }else{
        li2.style.display="none" 
    }
}
function showli3(){
    const li3=document.querySelector(".li3");
    if(li3.style.display==="none"){
        li3.style.display="block" 
    }else{
        li3.style.display="none" 
    }
}
function showli4(){
    const li4=document.querySelector(".li4");
    if(li4.style.display==="none"){
        li4.style.display="block" 
    }else{
        li4.style.display="none" 
    }
}
function showli5(){
    const li5=document.querySelector(".li5");
    if(li5.style.display==="none"){
        li5.style.display="block" 
    }else{
        li5.style.display="none" 
    }
}
function showli6(){
    const li6=document.querySelector(".li6");
    if(li6.style.display==="none"){
        li6.style.display="block" 
    }else{
        li6.style.display="none" 
    }
}
function showli7(){
    const li7=document.querySelector(".li7");
    if(li7.style.display==="none"){
        li7.style.display="block" 
    }else{
        li7.style.display="none" 
    }
}
function showli8(){
    const li8=document.querySelector(".li8");
    if(li8.style.display==="none"){
        li8.style.display="block" 
    }else{
        li8.style.display="none" 
    }
}
function showli9(){
    const li9=document.querySelector(".li9");
    if(li9.style.display==="none"){
        li9.style.display="block" 
    }else{
        li9.style.display="none" 
    }
}
function showli10(){
    const li10=document.querySelector(".li10");
    if(li10.style.display==="none"){
        li10.style.display="block" 
    }else{
        li10.style.display="none" 
    }
}
function showli11(){
    const li11=document.querySelector(".li11");
    if(li11.style.display==="none"){
        li11.style.display="block" 
    }else{
        li11.style.display="none" 
    }
}

