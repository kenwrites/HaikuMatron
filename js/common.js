const poem_output = document.querySelector('#poem-output');
var element;
const $poem_output = $('#poem-output')
var delay = 400;

// Functions 

function print_poem(poem_html) {
    $poem_output.html(poem_html)
}

function hide(element) {
    let classes = element.classList
    if (!classes.contains('hide')) {
        classes.add('hide')
    }
}

function show(element) {
    let classes = element.classList
    classes.remove('hide')
}

function shrink_big_poems() {
    let poem = poem_output;
    if (poem.textContent.length > 100) {
        if (!poem.classList.contains('long-poem')) {
            poem.classList.add('long-poem');
        }
    } else {
        poem.classList.remove('long-poem');
    }
}
