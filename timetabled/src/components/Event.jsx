import React from "react";

export default function Event(props) {
  return (
    <td className={"Event " + props.color}>
      <h5>{props.event}</h5>
    </td>
  );
}
