function demo(x){
    var res=document.getElementById('result');
    var btn=document.querySelector('button');
   if(x.value.length==5){
    res.innerText="Valid pin"
    res.style.color="green"
    x.style.border="4px solid green"
    
    btn.style.display="block"
   }
   else{
    res.innerText="Invalid pin"
    res.style.color="red"
    x.style.border="4px solid red"
     btn.style.display="none"
   }
}