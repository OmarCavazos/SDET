function producesAnError() {
  throw "This Failed miserably!";
}

function alsoProducesAnError() {
  console.log(nonExistentVariable.split());
}

function process() {
  try {
    // Something
    alsoProducesAnError();
  } catch (e) {
    console.log("Error: " + e);
  } finally {
    // Do producesAnError();
  }

  try {
    // Something
    producesAnError();
  } catch (e) {
    console.log("Error: " + e);
  } finally {
    
  }
}

process();
