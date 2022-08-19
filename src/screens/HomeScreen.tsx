import { QuizLayout } from '~/layouts';

export const HomeScreen = () => {
  return (
    <QuizLayout
      headline={
        <h1 className='text-center text-2xl font-semibold'>Welcome to the Trivia Challenge!</h1>
      }
      body={<div>hello</div>}
      footer={<button></button>}
    />
  );
};
