const poem_output = document.querySelector('#poem-output');
var delay = 400;

// Functions 

function print_poem_inner(poem_html) {
    poem_output.innerHTML = poem_html;
}

function remove_translucent() {
    poem_output.classList.remove('translucent-text');
}

function print_poem(poem_html) {
    poem_output.classList.add('translucent-text');
    window.setTimeout((poem_html) => {
        print_poem_inner(poem_html)
    }, delay, poem_html);
    window.setTimeout(() => {remove_translucent()}, delay);

}

