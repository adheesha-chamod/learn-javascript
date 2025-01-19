showStars(5);

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += "*"
    }
    console.log(pattern);
  }
}
