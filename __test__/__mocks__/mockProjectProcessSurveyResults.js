export const getMockProcessSurveyResults = (processSurveyResultsAttributes = {}) => {
  return Object.assign({}, defaultMockProcessSurveyResultsAttributes, processSurveyResultsAttributes);
};

const defaultMockProcessSurveyResultsAttributes = {
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
  projectId: 1,
  projectName: 'Heartbeat',
  updatedAt: '2017-03-13T15:41:47Z',
  user: { cognizantId: 123456, id: 1, firstName: 'User', lastName: 'Name' }
};
