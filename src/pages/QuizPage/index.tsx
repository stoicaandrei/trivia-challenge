import { useQuizReducer, useQuestions } from '~/state';
import { HomeScreen } from './HomeScreen';
import { QuizScreen } from './QuizScreen';
import { ResultScreen } from './ResultScreen';

export const QuizPage = () => {
  const [state, dispatch] = useQuizReducer();
  useQuestions({
    onSuccess: (questions) => dispatch({ type: 'SET_QUESTIONS', payload: { questions } }),
  });

  if (!state.isReady) {
    return <p>Loading...</p>;
  }

  console.log(state);

  const { isStarted, isFinished } = state;

  return (
    <div>
      {!isStarted && !isFinished && <HomeScreen onBegin={() => dispatch({ type: 'START_QUIZ' })} />}
      {isStarted && (
        <QuizScreen
          questions={state.questions}
          currentQuestion={state.currentQuestion}
          onAnswer={(answer) =>
            dispatch({
              type: 'ANSWER_QUESTION',
              payload: { answer },
            })
          }
        />
      )}
      {isFinished && (
        <ResultScreen
          questions={state.questions}
          answers={state.answers}
          onPlayAgain={() => dispatch({ type: 'RESET_QUIZ' })}
        />
      )}
    </div>
  );
};
