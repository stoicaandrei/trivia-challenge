import { useQuery } from 'react-query';
import { Question } from './types';

type UseQuestionsOptions = {
  onSuccess: (questions: Question[]) => void;
};
export const useQuestions = (options: UseQuestionsOptions) => {
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  return useQuery<Question[]>(
    [url],
    async () => {
      const res = await fetch(url);
      const data = await res.json();

      return data.results;
    },
    options,
  );
};
