export const getMockLocations = (locations = []) => {
  return defaultMockLocations.concat(locations);
};

const defaultMockLocations = [
  { id: 1, name: 'Bangalore, India' },
  { id: 2, name: 'Boulder, USA' },
  { id: 3, name: 'Chennai, India' },
  { id: 4, name: 'Denver, USA' },
  { id: 5, name: 'Kochi, India' }
];
