const number = 1;

switch (number) {
  case 1:
    console.log(`Number ${number} is "Uno" in Spanish!`);
    break;
  case 2:
    console.log(`Number ${number} is "Dos" in Spanish!`);
    break;

  case 3:
    console.log(`Number ${number} is "Tres" in Spanish!`);
    break;
  case 4:
    console.log(`Number ${number} is "Cuatro" in Spanish!`);
    break;

  case "5":
    console.log(`Number ${number} is "Cinco" in Spanish!`);
    break;

  case 1000:
  case 10000:
  case 1000000:
    console.log(`Number ${number} is "Un Chingo" in Spanish!`);
    break;

  default:
    console.log(`Yo no sé number ${number}`);
    break;
}
