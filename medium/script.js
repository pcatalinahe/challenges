//write function to calculate how many slices of pizza each person would get if they shared evenly

function sharePizza() {
  //calculate how many slices of pizza there are
  let slice = prompt("how many slices total?");
  //calculate how many people there are
  let people = prompt("how many people total?");
  slice = Number(slice);
  people = Number(people);
  //calculate how it would be split
  const calc = slice / people;

  if (slice <= 0 || people <= 0) {
    alert("Please enter valid inputs");
  }

  function evenSlices() {
    //console log an interpolated string with results
    console.log(
      `Each person (${people}) gets  ${calc}  slice(s) of pizza; from our  ${slice} slice pizza.`
    );
  }
  evenSlices();
}
sharePizza();
