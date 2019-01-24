var poem_array = [
        "Ever tardy was our man Nate<br>&apos;til he slipped and then broke his pate.<br>It did not give us pause<br>when that hearse got lost:<br>to his own funeral he was late.",
        "Playing football is<br>not mandatory.  Therefore,<br>team named 'Volunteers.'"
        "I once knew a Texan named Cora<br>who took her time walking (it’d bore ya’).<br>But one sad day her nose<br>stopped working – it froze.<br>No more stopping to smell the flora."
    ];
var poem_index;
var poem;

function print_poem(poem_html) {
    var poem_box = document.getElementById("poem");
    poem_box.innerHTML = poem_html;
}

function get_random_number(upper) {
    var random_number = Math.floor(Math.random() * upper);
    return random_number;
}

// Select and print random poem

poem_index = get_random_number(poem_array.length);
console.log("poem_index: " + poem_index);

poem = poem_array[1];

print_poem(poem);

