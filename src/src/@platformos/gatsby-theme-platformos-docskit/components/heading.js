import React from 'react';
import './heading.css';

const Heading = ({ level = 1, children, ...rest }) => {
  let classes = 'text-prominent relative m-0 p-2';
  let wrapperClasses = '';
  let Tag = 'h1';
  switch (level) {
    case '1':
      classes += ' text-3xl sm:text-5xl font-bold';
      break;
    case '2':
      Tag = 'h2';
      classes += ' text-3xl font-bold';
      wrapperClasses += ' flex';
      break;
    case '3':
      Tag = 'h3';
      classes += ' text-2xl font-bold';
      break;
    case '4':
      Tag = 'h4';
      classes += ' text-xl font-bold';
      break;
    default:
      Tag = 'h5';
      classes += ' text-xl';
      break;
  }
  return (
    <div className="headline">
      <div className={`headline-${level} ${wrapperClasses}`}>
        <div className={`headline-${level}__bg`}>
          <Tag className={`headline-${level}__text ${classes}`} {...rest}>
            {children}
          </Tag>
        </div>
      </div>
    </div>);
};

export default Heading;
