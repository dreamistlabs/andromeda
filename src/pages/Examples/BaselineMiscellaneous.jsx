import React from 'react';

const BaselineMiscellaneous = (props) => {
  return(
    <div>
      <section className="docs section" name="address">
          <header className="docs section__header">
              <h3 className="docs section__title">
                  Address
              </h3>
              <p className="docs section__description">
                  Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
              </p>
              <p className="docs section__description">
                  Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
              </p>
          </header>
          <div className="docs example">
              <div className="docs example__card">
                  <address>
                      Johnny Tsunami<br />
                      Dreamist Labs<br />
                      12345 Market Street<br />
                      San Francisco, CA 94102
                  </address>
              </div>
          </div>
      </section>

      <section className="docs section" name="abbreviations">
          <header className="docs section__header">
              <h3 className="docs section__title">
                  Abbreviations
              </h3>
              <p className="docs section__description">
                  Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
              </p>
          </header>
          <div className="docs example">
              <div className="docs example__card">
                   <p>Greetings from <abbr title="The Andromeda Galaxy">M31</abbr>.</p>
              </div>
          </div>
      </section>
    </div>
  )
}

export default BaselineMiscellaneous;