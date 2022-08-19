import { HomeScreen } from '~/screens';
import { useQuizReducer } from '~/state';

function App() {
  const [state, dispatch] = useQuizReducer();
  console.log(state);

  return (
    <div>
      <HomeScreen />
    </div>
  );
}

export default App;
