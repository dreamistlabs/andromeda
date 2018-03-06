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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                            <div className="col-md-1 col-sm-4">.col-md-1 .col-sm-4</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3">.col-sm-3</div>
                            <div className="col-sm-3">.col-sm-3</div>
                            <div className="col-sm-3">.col-sm-3</div>
                            <div className="col-sm-3">.col-sm-3</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4">.col-sm-4</div>
                            <div className="col-sm-6">.col-sm-6</div>
                            <div className="col-sm-2">.col-sm-2</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2">.col-sm-2</div>
                            <div className="col-sm-10">.col-sm-10</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">.col-sm-12</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">.col-md-6 col-xs-12</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="docs section" name="column-wrapping">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Column Offset
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs card">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-4 col-md-3 col-md-offset-2">.col-md-2 .col-md-offset-2</div>
                            <div className="col-xs-4 col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">.col-sm-12</div>
                            <div className="col-sm-3">.col-sm-3</div>
                            <div className="col-sm-10">.col-sm-10</div>
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
                    <div className="container-fluid">
                        <div className="grid">
                            <div className="grid__col grid__col-sm-9 grid__col-md-4 grid__col-lg-2">
                                .grid__col .grid__col-sm-9 .grid__col-md-4 .grid__col-lg-2
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__col--3">
                                .grid__col--3
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__col--9">
                                .grid__col--9
                            </div>
                            <div className="grid__col--3">
                                .grid__col--3
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__col--4">
                                .grid__col--4
                            </div>
                            <div className="grid__col">
                                .grid__col
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