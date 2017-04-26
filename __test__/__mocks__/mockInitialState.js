import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockInitialState = {
  app: {
    currentUser: null,
    isAuthenticated: false,
    message: null,
    requesting: false
  },
  clientSurvey: {
    project: null,
    requesting: false,
    submitted: false
  },
  kpi: {
    data: {},
    requesting: false
  },
  locations: {
    list: [],
    requesting: false
  },
  processSurvey: {
    categories: [],
    projectName: '',
    projectId: 0,
    requesting: false,
    updatedAt: '',
    user: {}
  },
  project: {
    data: null,
    requesting: false
  },
  projects: {
    list: []
  },
  routing: {
    locationBeforeTransitions: {
      pathname: '/',
      search: '',
      hash: '',
      action: '',
      key: '',
      query: {}
    }
  },
  user: {
    data: null,
    requesting: false
  },
  users: {
    list: [],
    requesting: false
  }
};

const middlewares = [thunk];

export const mockStore = configureStore(middlewares);
