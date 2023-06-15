function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

function ageVerifier(age) {
  return age > 18 ? "Is an Adult" : "Call for their parents";
}

console.log(ageVerifier(20));

console.log(ageVerifier(5));

console.log(ageVerifier(73));
