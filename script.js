const ArtBoard = document.getElementById('ArtBoard');
const pixels = document.getElementsByClassName('pixel');
const ResolutionBtn = document.getElementById('Resolution');  


function PixelGrid(Num = 16){
    for(let i=1;i<(Num*Num);i++){
        const div = document.createElement('div');
        div.style.width=`calc(100%/${Num})`;
        div.style.height=`calc(100%/${Num})`;
        div.classList.add('pixel');
        ArtBoard.appendChild(div);
    };
};
PixelGrid();


for(let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener('mouseover',() => {
        pixels[i].style.backgroundColor = 'red';
    });
}

