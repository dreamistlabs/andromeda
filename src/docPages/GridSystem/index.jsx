import React, { Component } from "react";

export default class GridSystemPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="docs heading">Grid System</h1>
        <p>
          Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged
          decaffeinated espresso. Americano filter coffee blue mountain,
          extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin
          spice percolator, filter carajillo, black sugar cortado caramelization
          so instant.
        </p>
        <section className="docs section" name="rows-and-columns">
          <div className="docs section__header">
            <h2 className="docs section__title">Rows and Columns</h2>
            <p className="docs section__description">
              Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio
              aged decaffeinated espresso. Americano filter coffee blue
              mountain, extraction, roast, acerbic filter milk skinny doppio.
              Mocha pumpkin spice percolator, filter carajillo, black sugar
              cortado caramelization so instant. Grinder shop, con panna dark
              galão french press robust froth. Wings percolator, wings, irish
              seasonal black single shot, sit spoon galão seasonal java.
            </p>
          </div>
          <div className="docs example">
            <div className="docs card">
              <div className="container-fluid" />
              <div className="container-fluid" />
              <div className="container-fluid" />
              <div className="container-fluid" />
              <div className="container-fluid" />
              <div className="container-fluid" />
            </div>
          </div>
        </section>

        <section className="docs section" name="column-wrapping">
          <div className="docs section__header">
            <h2 className="docs section__title">Column Offset</h2>
            <p className="docs section__description">
              Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio
              aged decaffeinated espresso. Americano filter coffee blue
              mountain, extraction, roast, acerbic filter milk skinny doppio.
            </p>
          </div>
          <div className="docs example">
            <div className="docs card">
              <div className="container-fluid" />
            </div>
          </div>
        </section>

        <section className="docs section" name="column-wrapping">
          <div className="docs section__header">
            <h2 className="docs section__title">Column Wrapping</h2>
            <p className="docs section__description">
              Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio
              aged decaffeinated espresso. Americano filter coffee blue
              mountain, extraction, roast, acerbic filter milk skinny doppio.
            </p>
          </div>
          <div className="docs example">
            <div className="docs card">
              <div className="container-fluid" />
            </div>
          </div>
        </section>

        <section className="docs section" name="nested-columns">
          <div className="docs section__header">
            <h2 className="docs section__title">Nested Columns</h2>
            <p className="docs section__description">
              Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio
              aged decaffeinated espresso. Americano filter coffee blue
              mountain, extraction, roast, acerbic filter milk skinny doppio.
            </p>
          </div>
          <div className="docs example">
            <div className="docs card">
              <div className="container-fluid">
                {/* <div className="grid">
                  <div className="grid__col grid__col-sm-9 grid__col-md-4 grid__col-lg-2">
                    .grid__col .grid__col-sm-9 .grid__col-md-4 .grid__col-lg-2
                  </div>
                </div>
                <div className="grid">
                  <div className="grid__col-3 grid__col-sm-4 grid__col-sm-offset-2">
                    .grid__col-3 .grid__col-sm-4 .grid__col-sm-offset-2
                  </div>
                </div>
                <div className="grid">
                  <div className="grid__col-9">.grid__col-9</div>
                  <div className="grid__col-3">.grid__col--3</div>
                </div> */}
                <div className="grid grid--12">
                  <div className="grid__col">
                    .grid__col with a lot of text? or enough to go on a second
                    line
                  </div>
                  <div className="grid__col-2">.grid__coldsfsfsdfds</div>
                  <div className="grid__col-3">.grid__col</div>
                  <div className="grid__col-offset-10 grid__col">
                    .grid__col
                  </div>
                  <div className="grid__col">.grid__col</div>
                  <div className="grid__col-offset-4 grid__col-2">
                    .grid__col
                  </div>
                  <div className="grid__col-9">.grid__col</div>
                  <div className="grid__col">.grid__col</div>
                  <div className="grid__col-6">.grid__col</div>
                  <div className="grid__col">.grid__col</div>
                  <div className="grid__col-md-offset-9 grid__col-md-3">
                    .grid__col
                  </div>
                  <div className="grid__col-5">.grid__col</div>
                  <div className="grid__col-2">.grid__col</div>
                  <div className="grid__col">.grid__col</div>
                  <div className="grid__col-offset-2 grid__col-6">
                    .grid__col
                  </div>
                  <div className="grid__col-offset-11 grid__col">
                    .grid__col
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
