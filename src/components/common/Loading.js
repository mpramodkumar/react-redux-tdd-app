import React from 'react';
import '../../assets/scss/loading.scss';

const Loading = () => {
  return (
    <div className="loading-dots__container">
      <div className="loading-dots">
        <div className="loading-dot red" />
        <div className="loading-dot yellow" />
        <div className="loading-dot green" />
      </div>
    </div>
  );
};

export default Loading;
