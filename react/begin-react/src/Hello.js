import React from "react";

// function Hello(props) {
//   return (
//     <div
//       style={{
//         color: props.color,
//       }}
//     >
//       Hello {props.name}
//     </div>
//   );
// }

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {isSpecial && <b>⭐️</b>} Hello {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "no name",
};

export default Hello;
