import React, { PropTypes } from 'react';
import WebFont from 'webfontloader';




import '../assets/scss/app.scss';

// for react-md components
WebFont.load({
  google: {
    families: ['Material Icons']
  },
  custom: {
    families: ['Interstate Bd', 'Interstate It', 'Interstate Lt', 'Interstate Reg'],
    urls: ['https://cloud.typenetwork.com/projects/984/fontface.css/']
  }
});

const App = ({ children }) => {
  return (
    <div className="app">
      <div className="app__container">
        { children }
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
