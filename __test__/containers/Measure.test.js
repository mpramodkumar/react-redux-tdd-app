import { mount, shallow } from 'enzyme';
import nock from 'nock';
import React from 'react';
import { Provider } from 'react-redux';

import { mockInitialState, mockStore } from '../__mocks__/mockInitialState';
import { getMockLocations } from '../__mocks__/mockLocations';
import Loading from '../../src/components/common/Loading';
import Measure from '../../src/containers/Measure';

const { list, requesting } = mockInitialState.locations;
const defaultLocations = list;
const defaultRequesting = requesting;

const getStoreData = (locations = defaultLocations, requesting = defaultRequesting) => {
  const state = {
    locations: {
      list: locations,
      requesting: requesting
    }
  };

  return Object.assign({}, mockInitialState, state);
};

const mountComponent = (store) => {
  return mount(
    <Provider store={store}>
      <Measure />
    </Provider>
  );
};

describe('Container: Measure', () => {
  beforeEach(() => {
    nock('http://localhost:3000').get(/locations/).reply(200, { fake: 'data' });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('form fields', () => {
    let wrapper;

    beforeEach(() => {
      const store = mockStore(getStoreData());

      wrapper = mountComponent(store);
    });

    it('renders the form body', () => {
      expect(wrapper.find('.container').exists()).toBe(true);
    });

    
  });

});
