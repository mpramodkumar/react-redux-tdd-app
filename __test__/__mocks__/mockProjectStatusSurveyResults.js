export const getMockStatusSurveyResults = (statusSurveyResultsAttributes = {}) => {
  return Object.assign({}, defaultMockStatusSurveyResultsAttributes, statusSurveyResultsAttributes);
};

const defaultMockStatusSurveyResultsAttributes = {
  id: 1,
  projectId: 1,
  npsScore: 1,
  user: { cognizantId: 123456, id: 1, firstName: 'User', lastName: 'Name' },
  clientCommunicationFrequency: 3,
  clientSatisfactionRating: 'Happy',
  stoplightColor: 2,
  teamHappinessRating: 'Very Happy',
  clientFeeling: 'Great',
  currentBlockers: 'None',
  doneDifferently: 'Nothing',
  whatWorkedWell: 'PRs',
  weeksEffortRemaining: 3.0,
  unknownEffortRemaining: false,
  hitCommitmentsLastWeek: true,
  needHelp: false,
  updatedAt: '2017-03-06T15:41:47Z'
};
