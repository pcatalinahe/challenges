//create outer function
function information() {
  //create inner function
  function closure() {
    //create object with 2 properties
    let PII = {
      name: "Chris",
      ssn: "123-45-6789",
    };

    function getName() {
      return PII.name;
    }
    //function to keep SSN private
    function getSSN() {
      return PII.ssn;
    }

    return {
      getName: getName,
      getSSN: getSSN
    };
  }
  return closure();
}

// Call the function

const patient2 = information();
// console.log(patient2.getSSN());
// console.log(patient2.getName());

// Output: Undefined
console.log(patient2.names); 
// Output: Undefined
  console.log(patient2.ssn); 
// Output: John
  console.log(patient2.getName());
// Output: 123-45-6789
  console.log(patient2.getSSN()); 

