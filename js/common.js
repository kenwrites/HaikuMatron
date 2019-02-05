const poem_card = document.querySelector('.poem');
var delay = 300;

// Functions 

function print_poem_inner(poem_html) {
    let poem_box = document.getElementById("poem");
    poem_box.innerHTML = poem_html;
}

function remove_translucent() {
    poem.classList.remove('translucent-text');
    console.log(poem_card);
}

function print_poem(poem_html) {
    poem.classList.add('translucent-text');
    window.setTimeout((poem_html) => {
        print_poem_inner(poem_html)
    }, delay, poem_html);
    window.setTimeout(() => {remove_translucent()}, delay);

}

