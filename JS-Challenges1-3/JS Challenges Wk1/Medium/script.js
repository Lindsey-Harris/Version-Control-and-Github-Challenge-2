var upper = "UPPERCASE"
var lower = "lowercase"
var normal = "Normal"

// Prompt user to type a word uppercase, lowercase, or normally
var input = prompt('Type a word using all uppercase, lowercase, or normally');

// Determine if input is in caps, lowercase or normal & console log whether they are shouting, whispering, or talking normally
if (input === input.toUpperCase()){
    alert(upper)
    console.log("SHOUTING")
} else if (input === input.toLowerCase()){
    alert(lower)
    console.log("whispering")
} else {
    alert(normal)
    console.log("Talking Normally")
}
