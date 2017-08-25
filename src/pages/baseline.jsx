import React, { Component } from 'react';

export default class BaselinePage extends Component {
  render() {
    return(
      <div className="container-fluid">
        <h1 className="docs heading">Baseline</h1>
        <p>
            Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin spice percolator, filter carajillo, black sugar cortado caramelization so instant.
        </p>
        <section className="docs section" name="headings">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Headings
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin spice percolator, filter carajillo, black sugar cortado caramelization so instant. Grinder shop, con panna dark galão french press robust froth. Wings percolator, wings, irish seasonal black single shot, sit spoon galão seasonal java.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </div>
            </div>
        </section>

        <section className="docs section" name="lists">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Lists
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <ul>
                        <li>Unordered list item</li>
                        <li>Unordered list item</li>
                        <li>Unordered list item</li>
                        <li>Something with another list
                            <ul>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                            </ul>
                        </li>
                        <li>Unordered list item</li>
                        <li>Unordered list item</li>
                    </ul>
                    <ol>
                        <li>Ordered list item</li>
                        <li>Ordered list item</li>
                        <li>Ordered list item</li>
                        <li>Ordered list item with another list
                            <ol>
                                <li>Another list of items</li>
                                <li>Another list of items</li>
                                <li>Another list of items</li>
                            </ol>
                        </li>
                        <li>Ordered list item</li>
                        <li>Ordered list item</li>
                    </ol>
                </div>
            </div>
        </section>

        <section className="docs section" name="forms">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Forms
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <form action="">
                        <fieldset>
                            <legend>I am a fieldset legend</legend>
                            <p>
                                <label htmlFor="">Hi, I'm a label</label>
                                <input type="text" />
                            </p>
                            <p><input type="text" placeholder="I'm an input text field" /></p>
                            <p><input type="search" placeholder="I'm an input search field" /></p>
                            <p><input type="email" placeholder="I'm an input email field" /></p>

                            <p>
                                <input type="radio" name="pets" value="cat" defaultChecked /> Cat
                                <input type="radio" name="pets" value="dog" /> Dog
                                <input type="radio" name="pets" value="both" /> Both
                            </p>

                            <p><textarea name="" id="" cols="30" rows="10"></textarea></p>

                            <p>
                                <input type="submit" />
                                <input type="button" value="Submit" />
                                <button>Submit</button>
                            </p>
                            <p>
                                <input type="submit" disabled />
                                <input type="button" value="Submit" disabled />
                                <button disabled>Submit</button>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>

        <section className="docs section" name="definition-lists">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Definition Lists
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <dl>
                        <dt>Definition Title</dt>
                        <dd>Definition text...</dd>
                        <dt>Definition Title</dt>
                        <dd>Definition text...</dd>
                        <dd>Definition text...</dd>
                        <dd>Definition text...</dd>
                        <dt>Definition Title</dt>
                        <dd>Definition text...</dd>
                    </dl>
                </div>
            </div>
        </section>

        <section className="docs section" name="preformatted-text">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Preformatted Text
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                  <pre>{`
function someFunction() {
    console.log("Hello Milky Way Galaxy!");
}
                  `}</pre>
                </div>
            </div>
        </section>

        <section className="docs section" name="tables">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Tables
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <table>
                        <caption>Tables can have captions? Apparently so!</caption>
                        <thead>
                            <tr>
                                <th>Table Header</th>
                                <th>Table Header</th>
                                <th>Table Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                            </tr>
                            <tr>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                            </tr>
                            <tr>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                                <td>Table body cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="docs section" name="blockquotes">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Blockquotes
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>
            <div className="docs example">
                <div className="docs example__card">
                    <blockquote>
                        <p>This is a block quote.</p>
                        <p>From cool dude.</p>
                    </blockquote>
                </div>
            </div>
        </section>

        <section className="docs section" name="misc">
            <header className="docs section__header">
                <h2 className="docs section__title">
                    Miscellaneous
                </h2>
                <p className="docs section__description">
                    Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio.
                </p>
            </header>

            <section className="docs section" name="address">
                <header className="docs section__header">
                    <h3 className="docs section__title">
                        Address
                    </h3>
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
        </section>
    </div>
    )
  }
}