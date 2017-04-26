export const getMockProcessSurvey = (processSurveyAttributes = {}) => {
  return Object.assign({}, defaultMockProcessSurvey, processSurveyAttributes);
};

const defaultMockProcessSurvey = {
  categories: [
    {
      category: 'Sprint Planning',
      entries: [
        { question: 'Are you doing X?', answer: 'No' },
        { question: 'Are you doing Y?', answer: 'No' }
      ]
    },
    {
      category: 'Retros',
      entries: [
        { question: 'Are you doing X?', answer: 'No' },
        { question: 'Are you doing Y?', answer: 'No' }
      ]
    }
  ],
  projectName: 'Heartbeat',
  projectId: 123,
  updatedAt: '2017-03-10T21:42:28Z'
};
