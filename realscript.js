var eventType = prompt ("What type of event are you attending?")
var tempFahr = prompt ("What is the temperature?")
var result = " ";


if (eventType === 'casual' && tempFahr < 30) {
    result = `Since it is ${tempFahr} degrees and it is a ${eventType} you should wear a coat and something comfy.` 
    console.log(result);
}
 else if (eventType === 'semi-formal' && tempFahr <= 30) {
    result = `Since it is ${tempFahr} degrees and it is a ${eventType} you should wear a jacket and a polo.` 
    console.log(result);
}
 else (eventType === 'formal' && tempFahr > 30); {
    result = `Since it is ${tempFahr} degrees and it is a ${eventType} you should wear no jacket and a suit.` 
    console.log(result);
}