import React, { Fragment } from 'react';
import { Logos } from './logos';
import './marque.css';

export default function Marque() {
  function ShowLogos() {
    const logosWithDuplicates = [...Logos];

    return logosWithDuplicates.map((logo) => (
      <div key={logo.id} className="marquee-item">
        <img src={`/public/LogosRes/${logo.image}`} alt={logo.title} />
      </div>
    ));
  }

  return (
    <Fragment>
        <div className="parentComposantMarque" data-aos="fade-up">
            <h2 className='TitleMarque'>Trusted by more than +1000 restaurants.</h2>
                <div className="parentMarque">
                    <div className="marquee-container">{ShowLogos()}</div>
                </div>
        </div>
    </Fragment>
  );
}
