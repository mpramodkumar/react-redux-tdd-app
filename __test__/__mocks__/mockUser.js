export const getMockUser = (userAttributes = {}) => {
  return Object.assign({}, defaultMockUserAttributes, userAttributes);
};

const defaultMockUserAttributes = {
  admin: false,
  billable: true,
  cognizantId: 123456,
  email: 'user@example.com',
  id: 1,
  firstName: 'User',
  lastName: 'Name',
  location: { id: 1, name: 'Boulder, USA' },
  title: null
};
