import React from "react";
import Card from "@components/card";
import Button from "@components/button";
import "./cta-card.css";

const CtaCard = ({ iconSrc, ctaLink, ctaText, children }) => {
  return (
    <Card variant="gradient" className="c-card--cta not-prose">
      {iconSrc && <img src={iconSrc} alt="" />}
      <div className="c-card--cta__content">
        {children}
      </div>
      {ctaLink && (<Button href={ctaLink} className="c-card--cta__link">
        {ctaText}
      </Button>)}
    </Card>
  )
};

export default CtaCard;
