//Grabing Buttons
let displayI = document.getElementById('display');
let display2 = document.getElementById('display2');
let button = document.querySelectorAll('button');
console.log('Node List = ' + button);
let count = 0;
let errorMessage = "'Error' Press C to reset";

/*//Input resizing with window.match at media querries
let viewPortWidth = window.matchMedia("(max-width: 639px)");
let viewPortWidthLg = window.matchMedia("(max-width: 1023px)");
console.log('View Port Width = ' + window.innerWidth);
window.addEventListener('change', inputSize());
*/
/*
//To detect screen change
let viewPortWidth = window.innerWidth;
console.log('View Port Width = ' + viewPortWidth);
window.addEventListener('load', () => {
    inputSize();
});
*/
//To detect screen change
inputSize(); // Changes size of input box Output Screen


//Audio Keys
let buttonSound = new Audio('./audio/ButtonPopSound.mp3');
let resultSound = new Audio('./audio/resultSound.mp3');
let errorSound = new Audio('./audio/errorSound.mp3');

/*Feature Disabled
//to add sound on hover
let hoverSound = new Audio('/audio/HoverSound.mp3');
*/

//To Go through all Buttons in node list i used For loop(For Each can be used however)
for (let i = 0; i < button.length; i++) {
    //To Know when and where button was pushed i used Event listner
    button[i].addEventListener("click", (show) => {
            //Debug :- displayI.value += button[i].innerHTML;   
        //Adding Button audio
            if (mute == "1") {buttonExclusion(i);}//To Stop and Play sounds

        //Added switch for addig Math
        switch (button[i].innerHTML) {
            case '=':
                try {
                    displayI.value = eval(display2.value);
                count = 1;
                if (mute == "1") {resultSound.play();/*Adding sound on Result*/}//To Stop and Play sounds
                break;
                } catch {
                    count = errorMessage;
                    displayI.value = errorMessage;
                    if (mute == "1") {errorSound.play();/*errorSound*/}//To Stop and Play sounds
                    break;
                }
                break;
            case 'C':
                displayI.value = "";
                display2.value = "";
                break;
            case '<i class="fa-solid fa-landmark"></i>': //Theme Icon
            case '<i class="fa-solid fa-face-smile"></i>'://Theme Icon2
            case '<i class="fa-sharp fa-solid fa-volume-high"></i>'://VolumeON
            case '<i class="fa-solid fa-volume-xmark"></i>'://VolumeOff
                break;    
            /*
            case '&#177;'://(+/-) changing functionality Functionality
                displayI.value = PM();
                break;
            */
            case '&lt;-'://Clear one Functionality
                if (displayI.value == '' || displayI.value == undefined) {
                    display2.value = display2.value.slice(0,-1);
                    break;
                }
                else {
                displayI.value = displayI.value.slice(0,-1);
                break;
                }
             //disValue2 == '-' ||
            case '+'://Repeating Operators User Error Handling    
            //case '-':    
            case '*': 
            case '/': 
            case '.':
                let disValue2 = display2.value[display2.value.length - 1];//Storing value for ease of handling
                if (disValue2 == '+' || disValue2 == '*' || disValue2 == '/' || disValue2 == '.' || disValue2 == undefined) {
                    break;
                }           
            default:
                solve();//reset Calculator After peroforming 
                displayI.value += button[i].innerHTML;
                break;
        }
    })
    /*//Feature Disabled
    //Adding audio class for hover sound
        button[i].addEventListener('mouseover' , () => {
        hoverSound.play();
        });
    */
}


/*Additional Functions*/

   //Push Value to input 2
   function send() {
    display2.value += displayI.value;
    displayI.value = "";

    }
    //Resets the value after solution
    function solve() {
    if (count == 1 || count == errorMessage) {
        displayI.value = "";
        display2.value = "";
        count = 0;
        //console.log(count);
    }
    }

    /*//Using Media.match query resize input 
    function inputSize() {
            if (viewPortWidth.matches) {//Equal to or less then 639px
                console.log('View port width <= 639');
                displayI.size = 17;
                display2.size = 21;
            } else {
                console.log('View port width >= 639');
                displayI.size = 21;
                display2.size = 29;
            }
        if (viewPortWidthLg.matches) {//Equal to or less then 1023px
            console.log('View port width <= 1023');    
        
        } else {
            console.log('View port width >= 1023');
            displayI.size = 23;
            display2.size = 29;
        }
        console.log(displayI.size);
        console.log(display2.size);
    }
    */
    /*//Changes Output box size according to port
    function inputSize() {
        if (viewPortWidth >= 640 && viewPortWidth <= 1024) {
            displayI.size = 21;
            display2.size = 29;
        } else if (viewPortWidth >= 1024) {
            displayI.size = 23;
            display2.size = 29;
            
        } else {}
    }
    */
    
    //Changes Output box size according to port
    function inputSize() {
        let tableWidth = document.getElementById('tableId').clientWidth; //Table Width
        console.log(tableWidth);
        
        if (tableWidth == 388) {
            displayI.size = 21;
            display2.size = 29;
        } else if (tableWidth == 484) {
            displayI.size = 23;
            display2.size = 29;
        }
    };
    
    //Button sound Exclusion
    function buttonExclusion(flag) {
        switch (button[flag].innerHTML) {
            case '=':
                break;    
            default:
                buttonSound.play();
                break;
        }
    };
    
// Nav Mobile Combining for Host
let menue = document.getElementById('menue');
let navHidden = document.getElementById('navHidden')
//Adding Event listner to know when menue button is pressed
menue.addEventListener('click', () => {
    if (navHidden.classList.contains('hidden')) {
        navHidden.classList.remove('hidden');
    } else {
        navHidden.classList.add('hidden');
    }
});

//Bg Sound
let bgSound1 = new Audio('./audio/bgSound1.mp3');
let bgSound2 = new Audio('./audio/bgSound2.mp3');
let mute = 1;

//Mobile Nav Functionality
    //Themes
        let theme1 = document.getElementById('theme1');
        let theme2 = document.getElementById('theme2');
    //Background Music
        let song1 = document.getElementById('songOn');
        let song2 = document.getElementById('songOff');
        //Using Event listner to know when buttons are clicked
               song1.addEventListener('click', () => {
                playbg();
               });
               song2.addEventListener('click', () => {
                bgSound1.pause();
                bgSound2.pause();
               });
    //Button Audio
        let buttonSound1 = document.getElementById('audioOn');
        let buttonSound2 = document.getElementById('audioOff');
        //Using Event listner to know when buttons are clicked
               buttonSound1.addEventListener('click', () => {
                mute = 1;
               });
               buttonSound2.addEventListener('click', () => {
                mute = 0;
               });
        
    //Bg Audio
        function playbg() {
            if (bgSound1.paused == true && bgSound2.paused == true) {
                bgSound1.play();
            } else if (bgSound1.paused == true) {
                bgSound2.play();
            }    
        };

//Combining Theme.js for host
//Getting all elements to be changed
let menueTheme2 = document.getElementById('menue');
let navTheme2 = document.getElementById('navHidden');
let bodyTheme2 = document.querySelector('body');
let calTheme2 = document.getElementById('callBox');
let tableTheme2 = document.getElementById('tableId');

//Getting Buttons
let theme1Button = document.getElementById('theme1');
let theme2Button = document.getElementById('theme2');

//Changing To theme 1
theme1Button.addEventListener('click', () => {
    console.log('theme1');//Debug purpose
    menueTheme2.classList.remove('menueCssTheme2');
    navTheme2.classList.remove('dropMenueTheme2');
    bodyTheme2.classList.remove('bodyTheme2');
    calTheme2.classList.remove('calBoxTheme2');
    tableTheme2.classList.remove('tableTheme2');
});
//Changing To theme 2
theme2Button.addEventListener('click', () => {
    console.log('theme2');//Debug purpose
    menueTheme2.classList.add('menueCssTheme2');
    navTheme2.classList.add('dropMenueTheme2');
    bodyTheme2.classList.add('bodyTheme2');
    calTheme2.classList.add('calBoxTheme2');
    tableTheme2.classList.add('tableTheme2');
});