var continueStory = false;
logoPic.addEventListener("click", function() {   

    if (startStory == true && sceneClick == false && memoriesClicked == false && clickFeedback == false) {
        container.style.bottom = "calc(0vh)"; 
        theChapters.style.zIndex = -2;
        startStory = false;        
        console.log("click one");
    }
    
    else if (startStory == false && sceneClick == false){
        container.style.bottom = "calc(201vh)";        
        setTimeout(function(){
            theChapters.style.zIndex = 1;
            container.style.zIndex = -1;  
        }, 1000);      
        startStory = true;        
        console.log("5");
    }
    
    else if (startStory == false && sceneClick == true){
        sceneSelect.style.opacity = "0.0";
        sceneSelect.style.zIndex = -2;
        sceneClick = false;
        container.style.bottom = "calc(0vh)";        
        console.log("2");
    }    
    
    else if (memoriesClicked == true){
        memoriesClicked = false;
        myMemories.style.opacity = "0.0";
        myMemories.style.zIndex = -1;
        container.style.bottom = "calc(0vh)";          
        sceneClick = false;        
        console.log("4");
        theChapters.src = "";
        theChapters.style.zIndex = -2;
        console.log("hello");

    }
    
})

btnHelp.addEventListener("click", function(){
    
}) 

//  START GAME  //

var startStory = false
btnStart.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
    continueStory == true
    if (startStory == false){

        setTimeout(function(){
            theChapters.style.zIndex = 1;            
            theChapters.src = "chapter1.html";    
        }, 1200);
        
        startStory = true;
    }
})

//  MEMORIES     //

var memoriesClicked = false;
btnMyMemories.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
    if (memoriesClicked == false){
        unfade(myMemories);
        memoriesClicked = true;
        theChapters.src = "comingSoon.html";
        theChapters.style.zIndex = 1; 
    }

    
   
})


var clickFeedback = false;
btnFeedback.addEventListener("click", function(){
    
    if (clickFeedback == false) {
        feedbackForm.style.display = "inherit";
        feedbackForm.style.animation = "feedbackform 1s";
                
        clickFeedback = true;
    }
        else{
        clickFeedback = false;    
        }
})

btnRed.addEventListener("click", function(){
    
    if (btnRed.submit) {  
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
    localStorage.getItem("gameState", JSON.stringify(gameState)); 
    if (gameState.ch2 == parseInt("1")){
        ch2Start.src = "Icons/btnSceneCh2Unlocked.svg";
        console.log("hello");
    }
    
    container.style.bottom = "calc(201vh)";
    sceneSelect.style.top = "0vh";
    
    if (sceneClick == false) {
        sceneSelect.style.opacity = "1.0";
        
        var ch1active = true;
        ch1Start.addEventListener("click", function(){
            if (btnUnlock == true || ch1active == true){
                theChapters.src = "Chapter1.html";                    sceneSelect.style.opacity = "0.0";
                sceneClick = false;
                console.log(sceneClick);
            }
        })
        
        sceneClick = true;
        console.log("sceneClick");        
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

