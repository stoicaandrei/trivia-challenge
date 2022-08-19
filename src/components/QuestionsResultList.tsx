import DOMPurify from 'dompurify';
import { Question } from '~/state';

type Props = {
  questions: Question[];
  answers: boolean[];
};

export const QuestionsResultList = ({ questions, answers }: Props) => {
  return (
    <div className='grid grid-cols-[min-content,1fr] items-start gap-5 overflow-scroll  text-slate-500'>
      {questions.map((question, index) => (
        <div key={index} className='contents'>
          <span className='text-2xl'>{answers[index] ? '+' : '-'}</span>
          <span
            className='text-left text-base'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.question) }}
          />
        </div>
      ))}
    </div>
  );
};
