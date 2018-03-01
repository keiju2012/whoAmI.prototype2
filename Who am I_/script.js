unfade(title);

var logoPic = document.getElementById("logoPic"),
    
    btnHelp = document.getElementById("btnHelp"),
    btnStart = document.getElementById("btnStart"),
    btnSceneSelect = document.getElementById("btnSceneSelect"),
    btnMyMemories = document.getElementById("btnMyMemories"),
    btnFeedback = document.getElementById("btnFeedback"),
    
    theChapters = document.getElementById("theChapters"),
        
    feedbackForm = document.getElementById("form-main"),
    theFeedback = document.getElementById("theFeedback"),
    btnRed = document.getElementById("btnRed"),
    
    container = document.getElementById("container"),
    mainMenu = document.getElementById("mainMenu"),
    stickyHeader = document.getElementById("stickyHeader"),
    
    btnBack = document.getElementById("btnBack"),
    
    sceneSelect = document.getElementById("sceneSelect"),
    ddChapters = document.getElementById("ddChapters"),
    chapterElements = document.getElementById("chapterElements"),
    unlocked = document.getElementById("unlocked"),
    ch1Start = document.getElementById("ch1Start"),
    ch2Start = document.getElementById("ch2Start"),
    ch3Start = document.getElementById("ch3Start"),
    
    ch1Group = document.getElementById("ch1Group"),
    ch2Group = document.getElementById("ch2Group"),
    ch3Group = document.getElementById("ch3Group"),
    
    ddShowAll = document.getElementById("ddScene1"),
    ddScene1 = document.getElementById("ddScene1"),
    ddScene2 = document.getElementById("ddScene2"),
    ddScene3 = document.getElementById("ddScene3");

btnHelp.addEventListener("click", function(){
    
}) 

var startStory = false
btnStart.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
    if (startStory == false){
        theChapters.style.zIndex = -1;
        setTimeout(function(){
            theChapters.src = "chapter1.html";    
        }, 1500);
        
        startStory = true;
    }
})

btnMyMemories.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
   
})


var clickFeedback = false;
btnFeedback.addEventListener("click", function(){
    
    if (clickFeedback == false) {
        feedbackForm.style.display = "inherit";
        feedbackForm.style.animation = "feedbackform 1s";
                
        clickFeedback = true;
    }
    theFeedback.addEventListener("submit", function(){
          
    })
        
        clickFeedback = false;    
})

btnRed.addEventListener("click", function(){
    
    if (btnRed.submit) {
//        feedbackForm.style.animation = "feedbackform2 1s";    
        setTimeout(function(){
            feedbackForm.style.display = "none";
        }, 2000); 
        feedbackForm.style.animation = "feedbackform2 1s";    
        }
})


//  sceneSelect Page  //

btnBack.addEventListener("click", function(){
    
})

var sceneClick = false;
btnSceneSelect.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
    sceneSelect.style.top = "0vh";
    
    if (sceneClick == false) {
        sceneSelect.style.opacity = "1.0";
        sceneClick = true;
    }
    
})

ddShowAll.addEventListener("click", function() {
    chapterElements
})

var btnUnlock = false;
unlocked.addEventListener("click", function(){
    
    if (btnUnlock == false) {
        btnUnlock = true;
        ch2Start.src = "Icons/btnSceneCh2.svg";
        ch3Start.src = "Icons/btnSceneCh3.svg";
        
        ch1Group.childNodes[10].childNodes[1].src = "Icons/btnUnlocked.svg";
        ch1Group.childNodes[12].childNodes[1].src = "Icons/btnUnlocked.svg";
        
        ch2Group.childNodes[9].childNodes[0].src = "Icons/btnUnlocked.svg";
        ch2Group.childNodes[11].childNodes[1].src = "Icons/btnUnlocked.svg";
        ch2Group.childNodes[13].childNodes[1].src = "Icons/btnUnlocked.svg"; 
        
        ch3Group.childNodes[8].childNodes[0].src = "Icons/btnUnlocked.svg";
        ch3Group.childNodes[10].childNodes[1].src = "Icons/btnUnlocked.svg";
        ch3Group.childNodes[12].childNodes[1].src = "Icons/btnUnlocked.svg"; 

      
    }    
    else if(btnUnlock == true) {            
        btnUnlock = false;

        ch2Start.src = "Icons/btnSceneCh2Locked.svg";
        ch3Start.src = "Icons/btnSceneCh3Locked.svg";  
        
        ch1Group.childNodes[10].childNodes[1].src = "Icons/btnLocked.svg";
        ch1Group.childNodes[12].childNodes[1].src = "Icons/btnLocked.svg";
        
        ch2Group.childNodes[9].childNodes[0].src = "Icons/btnLocked.svg";
        ch2Group.childNodes[11].childNodes[1].src = "Icons/btnLocked.svg";
        ch2Group.childNodes[13].childNodes[1].src = "Icons/btnLocked.svg"; 
        console.log(ch2Group.childNodes[13].childNodes[1]);        
        
        ch3Group.childNodes[8].childNodes[0].src = "Icons/btnLocked.svg";
        ch3Group.childNodes[10].childNodes[1].src = "Icons/btnLocked.svg";
        ch3Group.childNodes[12].childNodes[1].src = "Icons/btnLocked.svg";         
    }
})

//  Cool Effects and Junk   //

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function printing(text) {

    var letter = 0;
    var id = setInterval(frame, 25);
    function frame() {
        if (letter >= text.length) {
            clearInterval(id);
        } else {
            var addLetters = text.substring(0,letter);
            tester.innerText = addLetters;
            letter++; 

        }
      }
}

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function ddChapter() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function ddScene() {
        document.getElementById("myDropdown2").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    
    
theChapters.addEventListener("onchange", function(){
    localStorage.getItem("gameState", JSON.stringify(gameState)); 
    console.log(gameState);
})

    

    
    
    
    
    
    
    
    