export const KAFKA_URL = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_KAFKA_PRODUCER_URL :
  'https://example.com/CCIAPICore/api';
