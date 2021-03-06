import React, { Component } from 'react';

export default class GridSystemPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="docs heading">Grid System</h1>
        <p>
          Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin spice percolator, filter carajillo, black sugar cortado caramelization so instant.
        </p>
        <section className="docs section" name="rows-and-columns">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Rows and Columns
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin spice percolator, filter carajillo, black sugar cortado caramelization so instant. Grinder shop, con panna dark galão french press robust froth. Wings percolator, wings, irish seasonal black single shot, sit spoon galão seasonal java.
                </p>
            </header>
            <div className="docs example">
                <div className="docs card">
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                            <div className="m31 col-1">.m31.col-1</div>
                        </div>
                    </div>
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-3">.m31.col-3</div>
                            <div className="m31 col-3">.m31.col-3</div>
                            <div className="m31 col-3">.m31.col-3</div>
                            <div className="m31 col-3">.m31.col-3</div>
                        </div>
                    </div>
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-4">.m31.col-4</div>
                            <div className="m31 col-6">.m31.col-6</div>
                            <div className="m31 col-2">.m31.col-2</div>
                        </div>
                    </div>
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-2">.m31.col-2</div>
                            <div className="m31 col-10">.m31.col-10</div>
                        </div>
                    </div>
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-12">.m31.col-12</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="docs section" name="column-wrapping">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Column Wrapping
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs card">
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-12">.m31.col-12</div>
                            <div className="m31 col-3">.m31.col-3</div>
                            <div className="m31 col-10">.m31.col-10</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="docs section" name="nested-columns">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Nested Columns
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs card">
                    <div className="m31 container-fluid">
                        <div className="m31 row">
                            <div className="m31 col-12">
                                .m31.col-12
                                <div className="m31 row">
                                    <div className="m31 col-4">.m31.col-4</div>
                                    <div className="m31 col-8">.m31.col-8</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}