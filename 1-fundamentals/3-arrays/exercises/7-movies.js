const movies = [
  {
    title: "a",
    year: 2018,
    rating: 4.5,
  },
  {
    title: "b",
    year: 2017,
    rating: 4.7,
  },
  {
    title: "c",
    year: 2019,
    rating: 3.3,
  },
  {
    title: "d",
    year: 2019,
    rating: 3.7,
  },
];

// all the movies in 2019 with rating > 3.0
// sort by their rating
// decending order
// pick their title

const titles = movies
  .filter((m) => m.year === 2019 && m.rating > 3)
  .sort((m1, m2) => m1.rating - m2.rating)
  .reverse()
  .map((m) => m.title);

  console.log(titles);
  
