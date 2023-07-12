import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import './awards.css';

const Awards = () => {
  return (
    <div className="awards">
      <a href="https://documentation.platformos.com/community/awards/dpa_best_overall_sme_devportal" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award1.png" alt="Best Overall SME DevPortal - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_accessible_devportal" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award2.png" alt="Best Accessible DevPortal - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_new_dx_innovation" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award3.png" alt="Best New DX Innovation - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_devportal_beyond_rest_platforms" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award4.png" alt="Best DevPortal Beyond REST Platforms - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dra_best_ongoing_developer_experience" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award5.png" alt="Best Ongoing Developer Experience - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_editorial_experience" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award6.svg" alt="Best Editorial Experience in a DevPortal - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_onboarding" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award7.png" alt="Best Onboarding - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_restapi_alternative" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award8.png" alt="Best Developer Portal for Alternatives to REST_APIs - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/uktc_awards" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/awards/award9.png" alt="UK Technical Communication Awards" /></a>
    </div>
  );
};

export default Awards;
