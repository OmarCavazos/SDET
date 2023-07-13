/*
 * | Number Grade | Letter Grade |
 * |--------------|--------------|
 * | 100 - 90     | A            |
 * | 90 - 80      | B            |
 * | 80 - 70      | C            |
 * | 70 - 60      | D            |
 * |  > 60        | F            |
 */

function gradeProcessor(grades) {
  for (const grade of grades) {
    if (grade > 0 && grade <= 100) {
      if (grade >= 90) {
        console.log(`Grade ${grade} is equal to letter A`);
      } else if (grade >= 80) {
        console.log(`Grade ${grade} is equal to letter B`);
      } else if (grade >= 70) {
        console.log(`Grade ${grade} is equal to letter C`);
      } else if (grade >= 60) {
        console.log(`Grade ${grade} is equal to letter D`);
      } else {
        console.log(`Grade ${grade} is equal to letter F`);
      }
    } else {
      console.log(`Grade ${grade} can't be processed as a Letter Grade`);
    }
  }
}

gradeProcessor([
  90, 95, 80, 96, 76, 74, 102, 86, 100, 67, 40, 88, 69, 70, -1, 98,
]);
