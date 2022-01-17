// variables
let answer; // the answer you're going to try to guess
let input; // your guess
let points = 0; // your initial points
let lives = 3; // your initial lives

// functions
function createExpression() // creates the boolean expression you're going to guess the answer to
{
    let e = []; // array of 6 random booleans
    let s = []; // array of 6 strings based on the random boolean values
    for (let i = 0; i < 6; i++) // length 6 because there are 6 operators to randomize
    {
        e.push(Math.random() < 0.5); // add a random boolean to the array
    }
    if(e[0]) // e[0] is the NOT outside of the whole expression
    {
        s.push("not ");
    }
    else
    {
        s.push("");
    }
    if(e[1]) // e[1] is the NOT attached to the first value
    {
        s.push("not ");
    }
    else
    {
        s.push("");
    }
    if(e[2]) // e[2] is the first value
    {
        s.push("true");
    }
    else
    {
        s.push("false");
    }
    if(e[3]) // e[3] is the boolean operator between the two values, AND/OR
    {
        s.push("and");
    }
    else
    {
        s.push("or");
    }
    if(e[4]) // e[4] is the NOT attached to the second value
    {
        s.push("not ");
    }
    else
    {
        s.push("");
    }
    if(e[5]) // e[5] is the second value
    {
        s.push("true");
    }
    else
    {
        s.push("false");
    }
    console.log("");
    console.log("--- EXPRESSION ---");
    console.log(`${s[0]}(${s[1]}${s[2]} ${s[3]} ${s[4]}${s[5]})`); // strings combined together to complete the boolean expression
    console.log("[T]rue or [F]alse?");
    return boolX(e[0],boolXY(e[3],boolX(e[1],e[2]),boolX(e[4],e[5]))); // the correct answer is returned
}
function boolX(a,p) // boolean NOT
{
    if(a) // if a is true, this function behaves like NOT
    {
        return !p; // NOT p
    }
    else // if a is false, this function does nothing
    {
        return p; // p
    }
}
function boolXY(a,p,q)
{ // boolean AND/OR
    if(a) // if a is true, this function behaves like AND
    {
        return (p && q); // p AND q
    }
    else // if a is false, this function behaves like OR
    {
        return (p || q); // p OR q
    }
}

// game loop
while(true){ // no limit to how long you can play, as long as you're alive
    console.log(`Lives: ${lives} Points: ${points}`); // log out your current lives and points
    answer = createExpression(); // get the question and answer you need to guess
    input = prompt(" : ").toUpperCase(); // allow both lower and upper case inputs
    console.log(""); 
    if((input === "T" && answer === true) || (input === "F" && answer === false)){ // check if you guessed correctly
        console.log("Correct! +1 point");
        points += 1; // +1 for every correct answer
    }else{ // else you guessed wrong
        console.log("Wrong! -1 life");
        lives -= 1; // -1 life if you guess wrong
    }
    if(lives<=0){ // if you're out of lives
        console.log("GAME OVER");
        console.log(`Final score: ${points}`); // your score
        break; // game over, stop the loop
    }
}