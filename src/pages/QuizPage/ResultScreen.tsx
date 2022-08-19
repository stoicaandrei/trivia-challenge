import DOMPurify from 'dompurify';
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
      <div className='grid grid-cols-[min-content,1fr] items-start gap-5 overflow-scroll'>
        {questions.map((question, index) => (
          <div key={index} className='contents text-slate-500'>
            <span className='text-2xl'>{answers[index] ? '+' : '-'}</span>
            <span
              className='text-left text-base'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.question) }}
            />
          </div>
        ))}
      </div>
      <button onClick={onPlayAgain}>PLAY AGAIN?</button>
    </QuizLayout>
  );
};
