export const getMockProject = (projectAttributes = {}) => {
  return Object.assign({}, defaultMockProjectAttributes, projectAttributes);
};

const defaultMockProjectAttributes = {
  active: true,
  currentUserRole: 'Developer',
  description: 'Best Project Ever',
  gitHubRepositoriesAttributes: [],
  id: 1,
  name: 'Heartbeat',
  pivotalTrackerId: 1,
  pivotalTrackerApiToken: "ball-don't-lie",
  processSurveysStats: [],
  uuid: '',
  teamMembers: []
};
