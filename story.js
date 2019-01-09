var questions = 3;

questions -= 1;
var questionsLeft = "[" + questions + " questions left]";

questions -= 1;
var questionsLeft = "[" + questions + " questions left]";
var twoSylNoun2 = prompt("Enter another 2-syllable noun. " + questionsLeft);

questions -= 1;
var questionsLeft = "[" + questions + " questions left]";
var oneSylAdjective = prompt("Enter a 1-syllable adjective. " + questionsLeft);

var story = "There is no " + twoSylNoun1 + "</br>" + "that can capture my " + twoSylNoun2 + "</br>" + "for you, my " + oneSylAdjective + " one.";
document.write(story);