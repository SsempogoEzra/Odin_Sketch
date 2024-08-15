const ArtBoard = document.getElementById('ArtBoard');
const pixels = document.getElementsByClassName('pixel');
const ResolutionBtn = document.getElementById('ResolutionBtn');  
const ResetBtn = document.getElementById('ResetBtn');


function PixelGrid(Num=16){
    for(let i=1;i<(Num*Num);i++){
        const div = document.createElement('div');
        div.style.width=`calc(100%/${Num})`;
        div.style.height=`calc(100%/${Num})`;
        div.classList.add('pixel');
        ArtBoard.appendChild(div);
    };
    for(let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener('mouseover',() => {
            pixels[i].style.backgroundColor = 'red';
        });
    }
};

function ResetGrid(){
    ArtBoard.innerHTML= "";
    PixelGrid();
}

PixelGrid();

ResolutionBtn.addEventListener('click',() =>{
    let userInput;
    while(true){
    userInput= prompt('Enter Resolution desired,must be below 100.');
    userInput = parseInt(userInput,10);
    //check if number is in the range 0 to 100
        if(!isNaN(userInput) && userInput > 0 && userInput <= 100){
            break;
        }else{
            alert('Invalid input');
        }
    }

    const PixelDensity = userInput;
    ArtBoard.innerHTML="";
    PixelGrid(PixelDensity);
});

ResetBtn.addEventListener('click',ResetGrid);

