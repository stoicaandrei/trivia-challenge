import { Dispatch, useEffect, useReducer } from 'react';
import { useQuestions } from './data';
import { Question } from './types';

type QuizState = {
  questions: Question[];
  currentQuestion: number;
  answers: boolean[];
  isFinished: boolean;
  isStarted: boolean;
  isReady: boolean;
};

const intialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  answers: [],
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
  type: 'ANSWER_QUESTION';
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

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        isStarted: true,
        isFinished: false,
        currentQuestion: 0,
        answers: [],
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        isStarted: false,
        isFinished: false,
        currentQuestion: 0,
        answers: [],
      };
    case 'ANSWER_QUESTION':
      const { answer } = action.payload;
      const { currentQuestion, answers } = state;
      const isCorrect = state.questions[currentQuestion].correct_answer === answer;
      const isFinished = currentQuestion + 1 === state.questions.length;

      return {
        ...state,
        currentQuestion: currentQuestion + 1,
        answers: [...answers, isCorrect],
        isStarted: !isFinished,
        isFinished,
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
  return useReducer(quizReducer, intialState);
};
