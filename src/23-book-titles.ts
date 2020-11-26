export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
  },
];

function getTheTitles(books) {
  console.log(books[0].title);
  return books[1].title;
}

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
