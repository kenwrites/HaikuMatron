const make_poem_btn = document.querySelector('#make-poem-btn')
const noun_input_1 = document.querySelector('#noun-1')
const noun_input_2 = document.querySelector('#noun-2')
const adj_input_1 = document.querySelector('#adj-1')
var madlib
var input = {
    two_syl_noun1: "",
    two_syl_noun2: "",
    one_syl_adj1: ""
};

function get_words() {
    input.two_syl_noun1 = noun_input_1.value
    noun_input_1.value = ''
    input.two_syl_noun2 = noun_input_2.value
    noun_input_2.value = ''
    input.one_syl_adj1 = adj_input_1.value
    adj_input_1.value = ''
}

function build_madlib(words) {
    let madlib_html = '';
    madlib_html += "There is no " + words.two_syl_noun1 + "<br>that can capture my " + words.two_syl_noun2 + "<br>for you, my " + words.one_syl_adj1 + " one.";
    return madlib_html;
}

make_poem_btn.addEventListener('click', () => {
    get_words()
    madlib = build_madlib(input)
})

