import React from 'react';
import './card.css';

const Card = ({
  children,
  className = '',
  variant = 'default' /* default | gradient */,
  hoverable = false,
  shadow = false,
  bgImage = null,
  imageClasses = 'object-cover right-0 bottom-0 h-full w-auto m-0'
}) => {
  let base = 'c-card z-0 transition-all rounded-surface px-8 py-6 relative';

  if (shadow) {
    base += ' shadow-card';
  }

  if (hoverable) {
    base += ' hover:shadow-large';
  }

  const classes = {
    default: `bg-panel ${base}`,
    highlighted: `text-inverted prose-headings:text-inverted prose-a:text-inverted bg-gradient-to-r from-gradient2-from to-gradient2-to ${base}`,
    gradient: `text-inverted prose-headings:text-inverted prose-a:text-inverted bg-gradient-to-r from-gradient1-from to-gradient1-to ${base}`
  };

  return (
    <div className={`${classes[variant]} c-card--${variant} ${className}`} style={bgImage ? {paddingRight: '30%'} : {}}>
      {bgImage && <img src={bgImage} alt="" className={`absolute -z-10 ${imageClasses}`} />}
      {children}
    </div>
  );
};

export default Card;
