$('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var target = $(id).offset().top;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
    });

function getTargetTop(elem){
    var id = elem.attr("href");
    var offset = 60;
    return $(id).offset().top - offset;
}


    $(window).scroll(function(e){
        isSelected($(window).scrollTop())
    });

var sections = $('a[href^="#"]');

function isSelected(scrolledTo){
   
    var threshold = 100;
    var i;

    for (i = 0; i < sections.length; i++) {
        var section = $(sections[i]);
        var target = getTargetTop(section);
       
        if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
            sections.removeClass("active");
            section.addClass("active");
        }

    };
}


// Index text


var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 0);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 0);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);
