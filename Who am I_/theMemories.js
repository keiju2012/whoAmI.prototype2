var memoriesClicked = false;
btnMyMemories.addEventListener("click", function(){
    container.style.bottom = "calc(201vh)";
    if (memoriesClicked == false){
        unfade(myMemories);
        memoriesClicked = true;
     memoriesClicked.innerHTML = "Coming Soon!";
        
    }
    else if (memoriesClicked == true){
        memoriesClicked = false;
    }
    
   
})