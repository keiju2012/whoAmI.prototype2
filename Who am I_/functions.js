//  this will actually, fade in the title, Who am I?    //

unfade(title);

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