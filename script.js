const ArtBoard = document.getElementById('ArtBoard');


function PixelGrid(Num){
    for(let i=1;i<(Num*Num);i++){
        const div = document.createElement('div');
        div.style.width=`calc(100%/${Num})`;
        div.style.height=`calc(100%/${Num})`;
        div.classList.add('pixel');
        ArtBoard.appendChild(div);
    };
};
PixelGrid(16);

