export type Problem = {
  id: string;
  categoryId: string;
  problem: string;
  solution: number;
  type: "number" | "text";
};

export const problems: Problem[] = [
  {
    id: "1",
    categoryId: "1",
    problem: "1 + 1",
    solution: 2,
    type: "number",
  },
  { id: "2", categoryId: "1", problem: "2 + 2", solution: 4, type: "number" },
  { id: "3", categoryId: "1", problem: "3 + 5", solution: 8, type: "number" },
  { id: "4", categoryId: "1", problem: "4 + 6", solution: 10, type: "number" },
  { id: "5", categoryId: "1", problem: "1 + 5", solution: 6, type: "number" },
  { id: "6", categoryId: "1", problem: "2 + 6", solution: 8, type: "number" },
  { id: "7", categoryId: "1", problem: "4 + 7", solution: 11, type: "number" },
  { id: "8", categoryId: "1", problem: "8 + 4", solution: 12, type: "number" },
  { id: "9", categoryId: "1", problem: "9 + 6", solution: 15, type: "number" },
  {
    id: "10",
    categoryId: "1",
    problem: "10 + 10",
    solution: 20,
    type: "number",
  },

  { id: "11", categoryId: "2", problem: "1 - 1", solution: 0, type: "number" },
  { id: "12", categoryId: "2", problem: "2 - 1", solution: 1, type: "number" },
  { id: "13", categoryId: "2", problem: "3 - 1", solution: 2, type: "number" },
  { id: "14", categoryId: "2", problem: "4 - 2", solution: 2, type: "number" },
  { id: "15", categoryId: "2", problem: "7 - 2", solution: 5, type: "number" },
  { id: "16", categoryId: "2", problem: "8 - 4", solution: 4, type: "number" },
  { id: "17", categoryId: "2", problem: "10 - 5", solution: 5, type: "number" },
  { id: "18", categoryId: "2", problem: "9 - 3", solution: 6, type: "number" },
  { id: "19", categoryId: "2", problem: "8 - 3", solution: 5, type: "number" },
  {
    id: "20",
    categoryId: "2",
    problem: "10 - 4",
    solution: 6,
    type: "number",
  },

  {
    id: "21",
    categoryId: "3",
    problem:
      "You have 2 apples. Your friend gives you 4 more apples. How many apples do you have now?",
    solution: 6,
    type: "text",
  },
  {
    id: "22",
    categoryId: "3",
    problem:
      "There are 5 birds on a tree. 2 more birds come and join them. How many birds are on the tree now?",
    solution: 7,
    type: "text",
  },
  {
    id: "23",
    categoryId: "3",
    problem:
      "You have 6 toy cars. You get 3 more toy cars as a gift. How many toy cars do you have in total?",
    solution: 9,
    type: "text",
  },
  {
    id: "24",
    categoryId: "3",
    problem:
      "You have 4 crayons. Your teacher gives you 6 more crayons. How many crayons do you have now?",
    solution: 10,
    type: "text",
  },
  {
    id: "25",
    categoryId: "3",
    problem:
      "There are 6 fish in a tank. You add 6 more fish to the tank. How many fish are in the tank now?",
    solution: 12,
    type: "text",
  },
  {
    id: "26",
    categoryId: "3",
    problem:
      "You have 6 toy trains. Your brother gives you 7 more toy trains. How many toy trains do you have in total?",
    solution: 13,
    type: "text",
  },
  {
    id: "27",
    categoryId: "3",
    problem:
      "You have 9 books. Your friend gives you 7 more books. How many books do you have now?",
    solution: 16,
    type: "text",
  },
  {
    id: "28",
    categoryId: "3",
    problem:
      "You have 11 pencils. Your teacher gives you 9 more pencils. How many pencils do you have now?",
    solution: 20,
    type: "text",
  },
  {
    id: "29",
    categoryId: "3",
    problem:
      "You see 4 butterflies in the garden. Then you see 3 more butterflies. How many butterflies do you see in total?",
    solution: 7,
    type: "text",
  },
  {
    id: "30",
    categoryId: "3",
    problem:
      "There are 5 oranges on the table. You place 3 more oranges on the table. How many oranges are on the table now?",
    solution: 8,
    type: "text",
  },

  {
    id: "31",
    categoryId: "4",
    problem:
      "You have 8 candies. You eat 3 of them. How many candies do you have left?",
    solution: 5,
    type: "text",
  },
  {
    id: "32",
    categoryId: "4",
    problem:
      "There are 7 balloons. 2 balloons fly away. How many balloons are left?",
    solution: 5,
    type: "text",
  },
  {
    id: "33",
    categoryId: "4",
    problem:
      "You have 8 cookies. You give 4 cookies to your friend. How many cookies do you have now?",
    solution: 4,
    type: "text",
  },
  {
    id: "34",
    categoryId: "4",
    problem:
      "You have 9 strawberries. You eat 3 of them. How many strawberries do you have left?",
    solution: 6,
    type: "text",
  },
  {
    id: "35",
    categoryId: "4",
    problem:
      "There are 4 ducks in a pond. 2 ducks swim away. How many ducks are left in the pond?",
    solution: 2,
    type: "text",
  },
  {
    id: "36",
    categoryId: "4",
    problem:
      "You have 7 apples. You give 4 apples to your friend. How many apples do you have now?",
    solution: 3,
    type: "text",
  },
  {
    id: "37",
    categoryId: "4",
    problem:
      "You have 12 marbles. You lose 2 of them. How many marbles do you have left?",
    solution: 10,
    type: "text",
  },
  {
    id: "38",
    categoryId: "4",
    problem:
      "There are 16 cupcakes. You eat 5 of them. How many cupcakes are left?",
    solution: 11,
    type: "text",
  },
  {
    id: "39",
    categoryId: "4",
    problem:
      "You have 18 balloons. 3 balloons pop. How many balloons do you have now?",
    solution: 15,
    type: "text",
  },
  {
    id: "40",
    categoryId: "4",
    problem:
      "You have 20 crayons. You give 10 crayons to your sister. How many crayons do you have",
    solution: 10,
    type: "text",
  },
];
