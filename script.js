const grid = document.querySelectorAll('div.grid');
let isMouseDown = false;

grid.forEach((pixel) =>{
    pixel.addEventListener('mousedown',()=>{
        pixel.style.backgroundColor = "black";
        isMouseDown = true;
    });
    pixel.addEventListener('mouseup',()=>{
        pixel.style.backgroundColor = "black";
        isMouseDown = false;
    });
    pixel.addEventListener('mousemove', ()=>{
        if(isMouseDown)
        pixel.style.backgroundColor = "black";
    });
});