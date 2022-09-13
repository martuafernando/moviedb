const element = document.getElementsByClassName('horizontal-list');
let pos = { top: 0, left: 0, x: 0, y: 0 };

for (const ele of element) {
    const mouseDownHandler = (e) => {
        ele.style.userSelect = 'none';
    
        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };
        
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    
    const mouseMoveHandler = (e) => {
        const dx = e.clientX - pos.x;
        ele.scrollLeft = pos.left - dx;
    };
    
    const mouseUpHandler = ()  =>{
        ele.style.removeProperty('user-select');
        document.removeEventListener('mousemove', mouseMoveHandler);
    };
    
    ele.addEventListener('mousedown', mouseDownHandler);   
}

const buttonRight = document.getElementsByClassName('button-right');
for(const button of buttonRight){
  button.addEventListener('click', e =>{
    e.preventDefault();
    const list = button.parentElement.parentElement.nextElementSibling;
    list.scrollLeft += list.clientWidth;
  });
}

const buttonLeft = document.getElementsByClassName('button-left');
for(const button of buttonLeft){
  button.addEventListener('click', e =>{
    e.preventDefault();
    const list = button.parentElement.parentElement.nextElementSibling;
    list.scrollLeft -= list.clientWidth;
  });
}

const carouselLeft = document.getElementsByClassName('carousel__prev');
for(const button of carouselLeft){
  button.addEventListener('click', e =>{
    e.preventDefault();
    const list = button.parentElement.parentElement;
    list.scrollLeft -= list.clientWidth;
    console.log(list.scrollLeft);
    console.log(list.scrollWidth - list.scrollLeft);
  });
}

const carouselRight = document.getElementsByClassName('carousel__next');
for(const button of carouselRight){
  button.addEventListener('click', e =>{
    e.preventDefault();
    const list = button.parentElement.parentElement;
    list.scrollLeft += list.clientWidth;
    console.log(list.scrollLeft);
    console.log(list.scrollWidth - list.scrollLeft);
  });
}