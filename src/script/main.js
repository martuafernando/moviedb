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