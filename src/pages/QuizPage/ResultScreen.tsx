import { QuestionsResultList } from '~/components';
import { QuizLayout } from '~/layouts';
import { Question } from '~/state';

type Props = {
  questions: Question[];
  answers: boolean[];
  onPlayAgain?: () => void;
};

export const ResultScreen = ({ questions, answers, onPlayAgain }: Props) => {
  const score = answers.reduce((acc, ans) => acc + (ans ? 1 : 0), 0);

  return (
    <QuizLayout>
      <h1 className='font-semibold'>
        You scored {score} / {answers.length}
      </h1>
      <QuestionsResultList questions={questions} answers={answers} />
      <button onClick={onPlayAgain}>PLAY AGAIN?</button>
    </QuizLayout>
  );
};
