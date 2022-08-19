import { QuizLayout } from '~/layouts';

type Props = {
  onBegin: () => void;
};

export const HomeScreen = ({ onBegin }: Props) => {
  return (
    <QuizLayout>
      <h1 className='font-semibold'>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%</p>
      <button onClick={onBegin}>BEGIN</button>
    </QuizLayout>
  );
};
