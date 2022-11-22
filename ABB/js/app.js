function Search(){
    let search_bar=document.querySelector('.search-bar')
    search_bar.classList.remove('d-none')
}
function Close(){
    let search_bar=document.querySelector('.search-bar')
    search_bar.classList.add('d-none')
}
let btn=document.getElementById('btn')
let list=document.getElementById('list')
list.style.display='none'
btn.addEventListener('click',(event)=>{
    if(list.style.display==='block' ){
        list.style.display='none' 
    }
    else{
        list.style.display='block'
    }
})