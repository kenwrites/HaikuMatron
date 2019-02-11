var poem_array = [
        "Ever tardy was our man Nate<br>&apos;til he slipped and then broke his pate.<br>It did not give us pause<br>when that hearse got lost:<br>to his own funeral he was late.",
        "Playing football is<br>not mandatory.  Therefore,<br>team named 'Volunteers.'",
        "I once knew a Texan named Cora<br>who took her time walking (it’d bore ya’).<br>But one sad day her nose<br>stopped working – it froze.<br>No more stopping to smell the flora.",
        "Noelle was a misplaced Californian.<br>In a Kentucky church she was born again.<br>But then out came the snakes<br>and worse, casserole bakes.<br>She was on the West Coast by the morn’ again.",
        "Website has menu.<br>Why?  Is this the start of a<br>grand meal? Likely not.",
        "'But why?' walker asks.<br>Runner shrugs, tightens laces,<br>stretches, and begins."
    ];
var last_poem_index;
const poem_btn = document.querySelector("#next-p-btn");

// Functions 

function get_random_index(upper) {
    var random_number = Math.floor(Math.random() * upper);
    return random_number;
}

function print_rand_poem() {
    let poem_index;
    let poem;
    do {
        poem_index = get_random_index(poem_array.length);
        if (poem_index !== last_poem_index) {
            last_poem_index = poem_index;
            poem = poem_array[poem_index];
            print_poem(poem);
            break;
        } 
    } while (true);
}

// Select and print random poem on page load

print_rand_poem();
window.setTimeout( () => {
    shrink_big_poems()
}, delay)

// Select and print random poem on click

poem_btn.addEventListener('click', function(event) {
    print_rand_poem();
    window.setTimeout( () => {
        shrink_big_poems()
    }, delay)
});
