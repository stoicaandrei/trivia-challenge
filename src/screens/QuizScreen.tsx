import { QuizLayout } from '~/layouts';
import { Question, QuestionAnswer } from '~/state';
import DomPurify from 'dompurify';

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
        <div
          className='flex w-full items-center justify-center border border-black after:block after:pb-[100%]'
          dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(question.question) }}
        ></div>
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
