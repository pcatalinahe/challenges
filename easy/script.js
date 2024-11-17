//allow user's input for current exercise

let exercise = prompt('enter current exercise (present tense)')
const display = document.getElementById('display');
//load message on DOM
const message = `Today's exercise: ${exercise}`
display.innerText = exercise ;

//function to check if prompt is empty, if not then console log answer
//if prompt is left undefined or empty, alert user to retry
function userExercise() {
    if (exercise === null || exercise == '') {
        alert('Please enter exercise!')
        console.log("no exercise added");
    } else {
        console.log(message)
    }
}

userExercise();