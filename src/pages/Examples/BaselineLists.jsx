import React from 'react';

const BaselineLists = (props) => {
  return(
    <div>
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
  )
}

export default BaselineLists;