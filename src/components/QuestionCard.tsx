import DOMPurify from 'dompurify';
import { Question } from '~/state';

type Props = {
  question: Question;
};

export const QuestionCard = ({ question }: Props) => {
  return (
    <div
      className='flex w-full items-center justify-center border border-black after:block after:pb-[100%]'
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.question) }}
    />
  );
};
