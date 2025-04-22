var indexSlide = 0;
function next_slide(){
    indexSlide+=1;
    if (indexSlide>=document.getElementsByClassName('main-slide').length){
        indexSlide=0;
    }
    set_slide(indexSlide);
}
function prev_slide(){
    indexSlide-=1;
    if(indexSlide<=0){
        indexSlide=0;
    }
    set_slide(indexSlide);
}
function clear_slides(){
    let elementsSlide = document.getElementsByClassName('main-slide');
    for(let i =0;i<elementsSlide.length;i++) {
        if(elementsSlide[i].classList.contains('main-slide-active')){
            elementsSlide[i].classList.remove('main-slide-active');
        }
    }
}
function set_slide(index){
    clear_slides();
    let elementsSlide = document.getElementsByClassName('main-slide');
    for(let i=0; i<elementsSlide.length;i++){
        if(i==index) {
            let sq = 'main-slide-active '+elementsSlide[i].classList.toString(); 
            elementsSlide[i].setAttribute('class',sq);
        }
    }
}
function show_childrens(event){
    let attr = event.currentTarget.getAttribute('attr-img');
    let imgChilds = document.getElementsByClassName('child-img');
    for(let i=0; i<imgChilds.length;i++){
        if(imgChilds[i].getAttribute('attr-img')==attr){
            imgChilds[i].setAttribute('class','child-img-active child-img');
        }
        else{
            imgChilds[i].setAttribute('class','child-img');
        }
    }
}
function hide_childrens(event){
    let imgChilds = document.getElementsByClassName('child-img');
    for(let i=0; i<imgChilds.length;i++){
            imgChilds[i].setAttribute('class','child-img');
    }
}
function show_projects(event){
    let attr = event.currentTarget.getAttribute('attr-img');
    let imgChilds = document.getElementsByClassName('project-img');
    for(let i=0; i<imgChilds.length;i++){
        if(imgChilds[i].getAttribute('attr-img')==attr){
            imgChilds[i].setAttribute('class','project-img-active project-img');
        }
        else{
            imgChilds[i].setAttribute('class','project-img');
        }
    }
}
function hide_projects(event){
    let imgChilds = document.getElementsByClassName('project-img');
    for(let i=0; i<imgChilds.length;i++){
            imgChilds[i].setAttribute('class','project-img');
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(function(){
        next_slide();
    }, 3000);
    
    if(document.getElementsByClassName('url-children').length!=0){
        let childrens = document.getElementsByClassName('url-children');
        for(let i=0;i<childrens.length;i++) {
            childrens[i].addEventListener('mouseover',show_childrens);
            childrens[i].addEventListener('mouseout',hide_childrens);
        }
    }
    if(document.getElementsByClassName('project-item').length!=0){
        let childrens = document.getElementsByClassName('project-item');
        for(let i=0;i<childrens.length;i++) {
            childrens[i].addEventListener('mouseover',show_projects);
            childrens[i].addEventListener('mouseout',hide_projects);
        }
    }
});