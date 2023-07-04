import React from 'react';
import award1 from '../images/awards/award1.png';
import award2 from '../images/awards/award2.png';
import award3 from '../images/awards/award3.png';
import award4 from '../images/awards/award4.png';
import award5 from '../images/awards/award5.png';
import award6 from '../images/awards/award6.png';
import award7 from '../images/awards/award7.png';
import award8 from '../images/awards/award8.png';
import award9 from '../images/awards/award9.png';

const Awards = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <img src={award1} alt="award1" />
      <img src={award2} alt="award2" />
      <img src={award3} alt="award3" />
      <img src={award4} alt="award4" />
      <img src={award5} alt="award5" />
      <img src={award6} alt="award6" />
      <img src={award7} alt="award7" />
      <img src={award8} alt="award8" />
      <img src={award9} alt="award9" />
    </div>
  );
};

export default Awards;
