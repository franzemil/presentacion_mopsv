import React from 'react';
import './styles.css';

const ComputerBackground = ({ background }) => (
  <div className="notebook">
    <div className="display" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}></div>
    <div className="bottom"></div>
  </div>
)

export default ComputerBackground;