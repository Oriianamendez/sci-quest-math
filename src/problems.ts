import { Problem } from "./types";

export const problems: Problem[] = [
  // Easy addition problems - more to less
  {
    id: "1",
    categoryId: "1",
    problem: "1 + 1",
    solution: 2,
  },
  { id: "2", categoryId: "1", problem: "2 + 2", solution: 4 },
  { id: "3", categoryId: "1", problem: "5 + 3", solution: 8 },
  { id: "4", categoryId: "1", problem: "4 + 1", solution: 5 },
  { id: "5", categoryId: "1", problem: "5 + 1", solution: 6 },
  { id: "6", categoryId: "1", problem: "6 + 2", solution: 8 },
  { id: "7", categoryId: "1", problem: "5 + 5", solution: 10 },
  { id: "8", categoryId: "1", problem: "4 + 3", solution: 7 },
  { id: "9", categoryId: "1", problem: "6 + 3", solution: 9 },
  {
    id: "10",
    categoryId: "1",
    problem: "6 + 4",
    solution: 10,
  },

  // Medium addition problems - less to more
  {
    id: "11",
    categoryId: "2",
    problem: "1 + 2",
    solution: 3,
  },
  { id: "12", categoryId: "2", problem: "2 + 3", solution: 5 },
  { id: "13", categoryId: "2", problem: "1 + 3", solution: 4 },
  { id: "14", categoryId: "2", problem: "2 + 5", solution: 7 },
  { id: "15", categoryId: "2", problem: "3 + 5", solution: 8 },
  { id: "16", categoryId: "2", problem: "2 + 4", solution: 6 },
  { id: "17", categoryId: "2", problem: "3 + 4", solution: 7 },
  { id: "18", categoryId: "2", problem: "1 + 6", solution: 7 },
  { id: "19", categoryId: "2", problem: "2 + 7", solution: 9 },
  {
    id: "20",
    categoryId: "2",
    problem: "2 + 8",
    solution: 10,
  },

  // Difficult addition problems +10
  {
    id: "21",
    categoryId: "3",
    problem: "5 + 5 + 1",
    solution: 11,
  },
  {
    id: "22",
    categoryId: "3",
    problem: "5 + 3 + 4",
    solution: 12,
  },
  {
    id: "23",
    categoryId: "3",
    problem: "7 + 3 + 3",
    solution: 13,
  },
  {
    id: "24",
    categoryId: "3",
    problem: "3 + 5 + 3",
    solution: 11,
  },
  {
    id: "25",
    categoryId: "3",
    problem: "4 + 5 + 4",
    solution: 13,
  },
  {
    id: "26",
    categoryId: "3",
    problem: "4 + 2 + 4",
    solution: 10,
  },
  {
    id: "27",
    categoryId: "3",
    problem: "5 + 4 + 4",
    solution: 13,
  },
  {
    id: "28",
    categoryId: "3",
    problem: "6 + 1 + 4",
    solution: 11,
  },
  {
    id: "29",
    categoryId: "3",
    problem: "7 + 2 + 3",
    solution: 12,
  },
  {
    id: "30",
    categoryId: "3",
    problem: "8 + 2 + 3",
    solution: 13,
  },

  // Easy subtraction problems
  { id: "31", categoryId: "4", problem: "1 - 1", solution: 0 },
  { id: "32", categoryId: "4", problem: "2 - 1", solution: 1 },
  { id: "33", categoryId: "4", problem: "3 - 1", solution: 2 },
  { id: "34", categoryId: "4", problem: "4 - 2", solution: 2 },
  { id: "35", categoryId: "4", problem: "7 - 2", solution: 5 },
  { id: "36", categoryId: "4", problem: "8 - 4", solution: 4 },
  { id: "37", categoryId: "4", problem: "10 - 5", solution: 5 },
  { id: "38", categoryId: "4", problem: "9 - 3", solution: 6 },
  { id: "39", categoryId: "4", problem: "8 - 3", solution: 5 },
  {
    id: "40",
    categoryId: "4",
    problem: "10 - 4",
    solution: 6,
  },

  // Medium subtraction problems
  {
    id: "41",
    categoryId: "5",
    problem: "10 - 5 - 2",
    solution: 3,
  },
  {
    id: "42",
    categoryId: "5",
    problem: "10 - 4 - 3",
    solution: 3,
  },
  {
    id: "43",
    categoryId: "5",
    problem: "10 - 3 - 2",
    solution: 5,
  },
  {
    id: "44",
    categoryId: "5",
    problem: "10 - 6 - 2",
    solution: 2,
  },
  {
    id: "45",
    categoryId: "5",
    problem: "10 - 7 - 1",
    solution: 2,
  },
  {
    id: "46",
    categoryId: "5",
    problem: "10 - 8 - 1",
    solution: 1,
  },
  {
    id: "47",
    categoryId: "5",
    problem: "10 - 9 - 1",
    solution: 0,
  },
  {
    id: "48",
    categoryId: "5",
    problem: "10 - 5 - 3",
    solution: 2,
  },
  {
    id: "49",
    categoryId: "5",
    problem: "10 - 6 - 3",
    solution: 1,
  },
  {
    id: "50",
    categoryId: "5",
    problem: "10 - 7 - 2",
    solution: 1,
  },

  // Difficult subtraction problems +10
  { id: "51", categoryId: "6", problem: "10 - 5", solution: 5 },
  {
    id: "52",
    categoryId: "6",
    problem: "12 - 2",
    solution: 10,
  },
  {
    id: "53",
    categoryId: "6",
    problem: "14 - 4",
    solution: 10,
  },
  {
    id: "54",
    categoryId: "6",
    problem: "14 - 3",
    solution: 11,
  },
  {
    id: "55",
    categoryId: "6",
    problem: "15 - 3",
    solution: 12,
  },
  {
    id: "56",
    categoryId: "6",
    problem: "13 - 3",
    solution: 10,
  },
  {
    id: "57",
    categoryId: "6",
    problem: "13 - 1",
    solution: 12,
  },
  { id: "58", categoryId: "6", problem: "12 - 4", solution: 8 },
  {
    id: "59",
    categoryId: "6",
    problem: "14 - 2",
    solution: 12,
  },
  {
    id: "60",
    categoryId: "6",
    problem: "13 - 5",
    solution: 8,
  },

  // Problem solving
  {
    id: "61",
    categoryId: "7",
    problem:
      "You have 4 apples. Your friend gives you 2 more apples. How many apples do you have now?",
    solution: 6,
  },
  {
    id: "62",
    categoryId: "7",
    problem:
      "There are 5 birds on a tree. 2 more birds come and join them. How many birds are on the tree now?",
    solution: 7,
  },
  {
    id: "63",
    categoryId: "7",
    problem:
      "You have 6 toy cars. You get 3 more toy cars as a gift. How many toy cars do you have in total?",
    solution: 9,
  },
  {
    id: "64",
    categoryId: "7",
    problem:
      "You have 3 crayons. Your teacher gives you 1 more crayons. How many crayons do you have now?",
    solution: 4,
  },
  {
    id: "65",
    categoryId: "7",
    problem:
      "There are 4 fish in a tank. You add 3 more fish to the tank. How many fish are in the tank now?",
    solution: 7,
  },

  {
    id: "66",
    categoryId: "7",
    problem:
      "There are 4 ducks in a pond. 2 ducks swim away. How many ducks are left in the pond?",
    solution: 2,
  },
  {
    id: "67",
    categoryId: "7",
    problem:
      "You have 8 candies. You eat 3 of them. How many candies do you have left?",
    solution: 5,
  },
  {
    id: "68",
    categoryId: "7",
    problem:
      "There are 7 balloons. 2 balloons fly away. How many balloons are left?",
    solution: 5,
  },
  {
    id: "69",
    categoryId: "7",
    problem:
      "You have 8 cookies. You give 4 cookies to your friend. How many cookies do you have now?",
    solution: 4,
  },
  {
    id: "70",
    categoryId: "7",
    problem:
      "You have 9 strawberries. You eat 3 of them. How many strawberries do you have left?",
    solution: 6,
  },
];
