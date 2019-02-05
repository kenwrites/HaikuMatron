const poem_box = document.querySelector('#poem');
var delay = 300;

// Functions 

function print_poem_inner(poem_html) {
    poem_box.innerHTML = poem_html;
}

function remove_translucent() {
    poem_box.classList.remove('translucent-text');
}

function print_poem(poem_html) {
    poem_box.classList.add('translucent-text');
    window.setTimeout((poem_html) => {
        print_poem_inner(poem_html)
    }, delay, poem_html);
    window.setTimeout(() => {remove_translucent()}, delay);

}

