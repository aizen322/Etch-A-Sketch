
let sketchPadSize = 16;


function setSize(size){
    sketchPadSize = size;
}


window.onload = () =>{
    generateGrid(sketchPadSize);
}

/** **************************************************************/
/**** SKETCHPAD RESIZING FUNCTION */

const sketchpad = document.getElementById('sketchpad');

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

slider.onmousemove = (e) => updateSliderValue(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);

function updateSliderValue(value){
    sliderValue.innerHTML = `${value}`;
}

function changeSize(gridSize){
    updateSliderValue(gridSize);
    sketchpad.innerHTML ="";

    setSize(gridSize);
    generateGrid(gridSize);
}


function generateGrid(gridSize){
    sketchpad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    sketchpad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i<gridSize * gridSize; i++){
        const gridPixel = document.createElement('div');
        gridPixel.classList.add('grid');
        sketchpad.appendChild(gridPixel);
    }
}
/** **************************************************************/
/**** PEN COLORING FUNCTION */

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

