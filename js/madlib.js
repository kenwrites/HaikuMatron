var input = {
    two_syl_noun1: "",
    two_syl_noun2: "",
    one_syl_adj: ""
};
var poem;
const poem_btn = document.getElementById("next-mad-btn");

function build_madlib(words) {
    var madlib_html = '';
    madlib_html += "There is no " + words.two_syl_noun1 + "<br>that can capture my " + words.two_syl_noun2 + "<br>for you, my " + words.one_syl_adj + " one.";
    return madlib_html;
}

function print_madlib() {
    input.two_syl_noun1 = prompt("Enter a noun with two syllables");
    input.two_syl_noun2 = prompt("Enter a gerund with two syllables");
    input.one_syl_adj = prompt("Enter an adjective with only one syllable.");
    poem = build_madlib(input);
    print_poem(poem);
}

// Print 1st madlib 
print_madlib();

// Build and print new poem on button click

poem_btn.addEventListener ( "click", function(event) {
    print_madlib();    
});
