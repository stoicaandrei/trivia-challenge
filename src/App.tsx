import { HomeScreen, QuizScreen, ResultScreen } from '~/screens';
import { useQuizReducer } from '~/state';

function App() {
  const [state, dispatch] = useQuizReducer();

  if (!state.isReady) {
    return <p>Loading...</p>;
  }

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
}

export default App;
