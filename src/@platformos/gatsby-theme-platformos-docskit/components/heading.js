import React from 'react';

const Heading = ({ level = 1, children, ...rest }) => {
  let classes = 'text-prominent relative mb-0';
  let wrapperClasses = 'pb-4';
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
    case '5':
      Tag = 'h5';
      classes += ' text-xl';
      break;
  }
  return (
    <div className={wrapperClasses}>
      <Tag className={classes} {...rest}>
        {children}
      </Tag>
      {level === '2' ?
        (<span className="flex-1 border-b mb-1 ms-2"></span>) :
        ''}
    </div>);
};

export default Heading;
