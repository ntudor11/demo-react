import React from 'react';

const emp = (props) => {
  return (
    <tr width="50%">
      <td>{props.children}</td>
      <td>{props.salary}</td>
    </tr>
  )
};

export default emp;
