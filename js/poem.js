var poem_array = [
        "Ever tardy was our man Nate<br>&apos;til he slipped and then broke his pate.<br>It did not give us pause<br>when that hearse got lost:<br>to his own funeral he was late.",
        "Playing football is<br>not mandatory.  Therefore,<br>team named 'Volunteers.'",
        "I once knew a Texan named Cora<br>who took her time walking (it’d bore ya’).<br>But one sad day her nose<br>stopped working – it froze.<br>No more stopping to smell the flora.",
        "Noelle was a misplaced Californian.<br>In a Kentucky church she was born again.<br>But then out came the snakes<br>and worse, casserole bakes.<br>She was on the West Coast by the morn’ again.",
        "Website has menu.<br>Why?  Is this the start of a<br>grand meal? Likely not.",
        "'But why?' walker asks.<br>Runner shrugs, tightens laces,<br>stretches, and begins."
    ];
var poem_index;
var poem;

function print_poem(poem_html) {
    var poem_box = document.getElementById("poem");
    poem_box.innerHTML = poem_html;
}

function get_random_index(upper) {
    var random_number = Math.floor(Math.random() * upper);
    return random_number;
}

// Select and print random poem

poem_index = get_random_index(poem_array.length);
poem = poem_array[poem_index];
print_poem(poem);

