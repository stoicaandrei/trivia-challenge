import { Dispatch, useEffect, useReducer, useState } from 'react';

type Question = {
  category: string;
  question: string;
  correct_answer: 'True' | 'False';
};

type QuizState = {
  questions: Question[];
  currentQuestion: number;
  score: number;
  isFinished: boolean;
  isStarted: boolean;
  isReady: boolean;
};

const intialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  isFinished: false,
  isStarted: false,
  isReady: false,
};

type SetQuestionsAction = {
  type: 'SET_QUESTIONS';
  payload: {
    questions: Question[];
  };
};

type AnswerQuizAction = {
  type: 'ANSWER_QUIZ';
  payload: {
    answer: 'True' | 'False';
  };
};

type QuizAction =
  | {
      type: 'START_QUIZ' | 'RESET_QUIZ';
    }
  | AnswerQuizAction
  | SetQuestionsAction;

const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        isStarted: true,
        isFinished: false,
        currentQuestion: 0,
        score: 0,
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        isStarted: false,
        isFinished: false,
        currentQuestion: 0,
        score: 0,
      };
    case 'ANSWER_QUIZ':
      const { answer } = action.payload;
      const { currentQuestion, score } = state;
      const isCorrect = state.questions[currentQuestion].correct_answer === answer;
      return {
        ...state,
        currentQuestion: currentQuestion + 1,
        score: isCorrect ? score + 1 : score,
        isFinished: currentQuestion + 1 === state.questions.length,
      };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload.questions,
        isReady: true,
      };
    default:
      return state;
  }
};

export const useQuizReducer = (): [QuizState, Dispatch<QuizAction>] => {
  const [state, dispatch] = useReducer(quizReducer, intialState);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_QUESTIONS',
          payload: { questions: data.results },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [state, dispatch];
};
