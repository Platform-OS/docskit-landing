import React from 'react';
import award1 from '../images/awards/award1.png';
import award2 from '../images/awards/award2.png';
import award3 from '../images/awards/award3.png';
import award4 from '../images/awards/award4.png';
import award5 from '../images/awards/award5.png';
import award6 from '../images/awards/award6.svg';
import award7 from '../images/awards/award7.png';
import award8 from '../images/awards/award8.png';
import award9 from '../images/awards/award9.png';
import './awards.css';


const Awards = () => {
  return (
    <div className="awards">
      <a href="https://documentation.platformos.com/community/awards/dpa_best_overall_sme_devportal" target="_blank" rel="noopener noreferrer"><img src={award1} alt="Best Overall SME DevPortal - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_accessible_devportal" target="_blank" rel="noopener noreferrer"><img src={award2} alt="Best Accessible DevPortal - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_new_dx_innovation" target="_blank" rel="noopener noreferrer"><img src={award3} alt="Best New DX Innovation - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_devportal_beyond_rest_platforms" target="_blank" rel="noopener noreferrer"><img src={award4} alt="Best DevPortal Beyond REST Platforms - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dra_best_ongoing_developer_experience" target="_blank" rel="noopener noreferrer"><img src={award5} alt="Best Ongoing Developer Experience - DevPortal Awards 2022" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_editorial_experience" target="_blank" rel="noopener noreferrer"><img src={award7} alt="Best Editorial Experience in a DevPortal - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_onboarding" target="_blank" rel="noopener noreferrer"><img src={award6} alt="Best Onboarding - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/dpa_best_restapi_alternative" target="_blank" rel="noopener noreferrer"><img src={award8} alt="Best Developer Portal for Alternatives to REST_APIs - DevPortal Awards 2021" /></a>
      <a href="https://documentation.platformos.com/community/awards/uktc_awards" target="_blank" rel="noopener noreferrer"><img src={award9} alt="UK Technical Communication Awards" /></a>
    </div>
  );
};

export default Awards;
