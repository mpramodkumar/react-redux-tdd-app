export const getMockClientSurvey = (clientSurveyAttributes = {}) => {
  return Object.assign({}, defaultMockProjectAttributes, clientSurveyAttributes);
};

const defaultMockProjectAttributes = {
  name: 'Humana Pass',
  leadMembers: [
    {
      firstName: 'Cecelia',
      gravatarUrl: 'www.gravatar.com/some-id',
      lastName: 'Moran',
      location: 'Boulder, USA',
      role: 'Project Lead'
    },
    {
      firstName: 'Lewis',
      gravatarUrl: 'www.gravatar.com/some-id',
      lastName: 'Myers',
      location: 'Boulder, USA',
      role: 'Project Manager'
    },
    {
      firstName: 'Emma',
      gravatarUrl: 'www.gravatar.com/some-id',
      lastName: 'Robinson',
      location: 'Kochi, India',
      role: 'Project Lead'
    },
    {
      firstName: 'George',
      gravatarUrl: 'www.gravatar.com/some-id',
      lastName: 'Stone',
      location: 'Kochi, India',
      role: 'Project Manager'
    }
  ]
};
