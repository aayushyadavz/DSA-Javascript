// Create a function which accepts the age and tells whether a person is eligible to vote or not

function eligibiltyToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not eligible");
  } else {
    console.log("Eligible");
  }
}

eligibiltyToVote(17);
