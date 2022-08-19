import { QuizLayout } from '~/layouts';

export const HomeScreen = () => {
  return (
    <QuizLayout>
      <h1 className='font-semibold'>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%</p>
      <button>BEGIN</button>
    </QuizLayout>
  );
};
