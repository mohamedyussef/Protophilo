let dark=document.getElementById('dark');
let page=document.getElementById('page');
let intro=document.getElementById('intro');
dark.onclick=function(){
    if(page.style.background!='white'){
        page.style.background='white';
        intro.style.color="#0f0f0f"
    }else{
        page.style.background='#0f0f0f';
        intro.style.color="white"
    }
  
}