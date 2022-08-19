import { HomeScreen, QuizScreen } from '~/screens';
import { useQuizReducer } from '~/state';

function App() {
  const [state, dispatch] = useQuizReducer();

  if (!state.isReady) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {!state.isStarted && <HomeScreen onBegin={() => dispatch({ type: 'START_QUIZ' })} />}
      {state.isStarted && (
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
      {state.isFinished && <p>Finished</p>}
    </div>
  );
}

export default App;
