export type Subject = "all" | "cs" | "javascript" | "react";

export type Category = {
  id: number;
  name: Subject;
};

export type Question = {
  id: string;
  question: string;
  answer: string;
};
