export type QuestionAnswer = 'True' | 'False';

export type Question = {
  category: string;
  question: string;
  correct_answer: QuestionAnswer;
};
