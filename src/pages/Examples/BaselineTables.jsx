import React from 'react';

const BaselineTables = (props) => {
  return(
    <div>
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
  )
}

export default BaselineTables;