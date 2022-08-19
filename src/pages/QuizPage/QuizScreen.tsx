import { QuestionCard } from '~/components';
import { QuizLayout } from '~/layouts';
import { Question, QuestionAnswer } from '~/state';

type Props = {
  questions: Question[];
  currentQuestion: number;
  onAnswer?: (asnwer: QuestionAnswer) => void;
};

export const QuizScreen = ({ questions, currentQuestion, onAnswer }: Props) => {
  const question = questions[currentQuestion];

  return (
    <QuizLayout>
      <h1 className='font-semibold'>{question.category}</h1>
      <div className='w-full'>
        <QuestionCard question={question} />
        <p className='text-base'>
          {currentQuestion + 1} of {questions.length}
        </p>
      </div>
      <div className='flex items-center gap-10'>
        <button onClick={() => onAnswer?.('True')}>TRUE</button>
        <button onClick={() => onAnswer?.('False')}>FALSE</button>
      </div>
    </QuizLayout>
  );
};
