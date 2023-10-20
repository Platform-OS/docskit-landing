import React from 'react';
import './card.css';

const Card = ({
  children,
  className = '',
  variant = 'default' /* default | gradient | hero | feature */,
  hoverable = false,
  shadow = false,
  bgImage = null,
  icon = null,
  imageClasses = ''
}) => {
  let base = 'c-card z-0 transition-all rounded-surface px-8 py-6 relative';
  const image = bgImage || icon;
  if (shadow) {
    base += ' shadow-card';
  }

  if (hoverable) {
    base += ' hover:shadow-large';
  }

  if (bgImage) {
    base += ' c-card--image';
  }

  if (bgImage) {
    imageClasses = imageClasses || 'absolute -z-10 object-cover right-0 bottom-0 h-full w-auto m-0'
  }

  const classes = {
    default: `bg-panel ${base}`,
    highlighted: `text-inverted prose-headings:text-inverted prose-a:text-inverted bg-gradient-to-r from-gradient2-from to-gradient2-to ${base}`,
    gradient: `text-inverted prose-headings:text-inverted prose-a:text-inverted bg-gradient-to-r from-gradient1-from to-gradient1-to ${base}`,
    hero: `${base}`,
    feature: `${base}`
  };

  return (
    <div className={`${classes[variant]} c-card--${variant} ${className}`}>
      <div className='c-card__content'>
        {image && <span className='c-card__image-wrapper'><img src={image} alt="" className={`c-card__image ${imageClasses}`} /></span>}
        {children}
      </div>
    </div>
  );
};

export default Card;
