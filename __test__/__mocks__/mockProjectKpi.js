export const getMockProjectKpi = (projectKpiAttributes = {}) => {
  return Object.assign({}, defaultMockProjectKpiAttributes, projectKpiAttributes);
};

const defaultMockProjectKpiAttributes = {
  latest: {
    startDate: '2017-03-13T00:00:00Z',
    endDate: '2017-03-24T00:00:00Z',
    totalTestCount: 100,
    successRate: 50,
    sprintLength: 10
  },
  previous: {
    startDate: '2017-02-27T00:00:00Z',
    endDate: '2017-03-10T00:00:00Z',
    totalTestCount: 1,
    successRate: 100,
    sprintLength: 10
  }
};
