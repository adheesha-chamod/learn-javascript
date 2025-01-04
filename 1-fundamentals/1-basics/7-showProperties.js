const movie = {
  title: "John Wick",
  releasedYear: 2014,
  ratings: 6.5,
  director: "Nolan",
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key + ":", obj[key]);
    }
  }
}
