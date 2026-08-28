export type Book = {
  title: string;
  author: string;
};

export type YearOfReading = {
  year: number;
  books: Book[];
};

export const READING: YearOfReading[] = [
  {
    year: 2026,
    books: [
      // Add as you finish
    ],
  },
  {
    year: 2025,
    books: [
      { title: "I Heard There Was a Secret Chord", author: "Daniel Levitin" },
      { title: "The Empusium", author: "Olga Tokarczuk" },
      { title: "Lesser Known Monsters of the 21st Century", author: "Kim Fu" },
      { title: "The Information", author: "James Gleick" },
      { title: "The God of the Woods", author: "Liz Moore" },
      { title: "Model Home", author: "Rivers Solomon" },
      { title: "James", author: "Percival Everett" },
      { title: "The Heaven & Earth Grocery Store", author: "James McBride" },
      { title: "Children of Time", author: "Adrian Tchaikovsky" },
      { title: "Entangled Life", author: "Merlin Sheldrake" },
      { title: "The Doloriad", author: "Missouri Williams" },
      { title: "Children of Ruin", author: "Adrian Tchaikovsky" },
      { title: "Children of Memory", author: "Adrian Tchaikovsky" },
      { title: "Light Eaters", author: "Zöe Schlanger" },
      { title: "North Woods", author: "Daniel Mason" },
      { title: "Same Bed Different Dreams", author: "Ed Park" },
      { title: "The Genius of Birds", author: "Jennifer Ackerman" },
      { title: "Counternarratives", author: "John Keene" },
    ],
  },
  // Add more years going back
];