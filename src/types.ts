export type Pupil = {
  id: string;
  name: string;
  help: number;
  teacherId: string;
  answers: string[];
};

export type Problem = {
  id: string;
  categoryId: string;
  problem: string;
  solution: number;
};
