import React, { Component } from 'react';

export default class Section extends Component {
  capitalize(word) {
    return word.replace(/\b\w/g, (l) => {
      return l.toUpperCase();
    });
  }

  formatHeading(name) {
    if (name.match(/-/)) {
      return name.split('-').map((word) => {
        return this.capitalize(word);
      }).join(' ');
    } else {
      return this.capitalize(name);
    }
  }

  render() {
    let sectionName = this.props.name;

    return (
      <section className="docs section" name={sectionName}>
        <header className="docs section__header">
          <h2 className="docs section__title">
            {this.formatHeading(sectionName)}
          </h2>
        </header>

        {this.props.children}
      </section>
    );
  }
}