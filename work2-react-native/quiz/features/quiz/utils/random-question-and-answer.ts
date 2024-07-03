

import shuffle from 'lodash/shuffle'
import { Question } from '../types';

export const randomQuestionAndAnswer = (questions: Question[]) => {
  const shuffledQuestions = shuffle(questions);

  const shuffledQuestionAndAnswer = shuffledQuestions.map(question => {
    const shuffledAnswer =   shuffle(question.answers);
    return {
      ...question,
      answers: shuffledAnswer
    }
  })

  return shuffledQuestionAndAnswer;
};
