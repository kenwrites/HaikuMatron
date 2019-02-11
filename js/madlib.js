// Form constants

const form_main = document.querySelector('#form-main')
const noun_input_1 = document.querySelector('#noun-1')
const noun_input_2 = document.querySelector('#noun-2')
const adj_input_1 = document.querySelector('#adj-1')
const make_poem_btn = document.querySelector('#make-poem-btn')

// Poem display constants

const poem_main = document.querySelector('#poem-main')
const next_mad_btn = document.querySelector('#next-mad-btn')

// Variables

var madlib
var input = {
    two_syl_noun1: "",
    two_syl_noun2: "",
    one_syl_adj1: ""
};

// Functions

function get_words() {
    input.two_syl_noun1 = noun_input_1.value
    noun_input_1.value = ''
    input.two_syl_noun2 = noun_input_2.value
    noun_input_2.value = ''
    input.two_syl_adj1 = adj_input_1.value
    adj_input_1.value = ''
}
 
function build_madlib(words) {
    let madlib_html = '';
    madlib_html += "There is no " + words.two_syl_noun1 + "<br>that can capture my " + words.two_syl_noun2 + "<br>for you, " + words.two_syl_adj1 + " one.";
    return madlib_html;
}

// Program

make_poem_btn.addEventListener('click', () => {
    get_words()
    madlib = build_madlib(input)
    hide(form_main)
    show(poem_main)
    $poem_output.fadeOut(0)
    print_poem(madlib)
    $poem_output.fadeIn()    
})

next_mad_btn.addEventListener('click', () => {
    show(form_main)
    hide(poem_main)
})
