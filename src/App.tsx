import { HomeScreen } from '~/screens';
import { useQuizReducer } from '~/state';

function App() {
  const [state, dispatch] = useQuizReducer();

  if (!state.isReady) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {!state.isStarted && <HomeScreen onBegin={() => dispatch({ type: 'START_QUIZ' })} />}
      {state.isStarted && <p>Started</p>}
      {state.isFinished && <p>Finished</p>}
    </div>
  );
}

export default App;
