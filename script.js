const grid = document.querySelectorAll('div.grid');
let isMouseDown = false;
let penColor = document.getElementById('colorPicker');

grid.forEach((pixel) =>{
    pixel.addEventListener('mousedown',()=>{
        pixel.style.backgroundColor = penColor.value;
        isMouseDown = true;
    });
    pixel.addEventListener('mouseup',()=>{
        pixel.style.backgroundColor = penColor.value;
        isMouseDown = false;
    });
    pixel.addEventListener('mousemove', ()=>{
        if(isMouseDown)
        pixel.style.backgroundColor = penColor.value;
    });
});

/** **************************************************************/
/**** CLEAR FUNCTION BUTTON */
const clearbtn = document.getElementById("clear");
clearbtn.addEventListener('click',()=>{
    grid.forEach((pixel)=>{
        pixel.style.backgroundColor = "white";
    })
});
/** **************************************************************/