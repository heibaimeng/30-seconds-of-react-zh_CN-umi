import React from "react";
import styles from "./Tooltip.css";
function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div
        className={styles["tooltip"]}
        style={show ? { visibility: "visible" } : {}}
      >
        {text}
        <span className={styles["tooltip-arrow"]} />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}

export default function() {
  return (
    <Tooltip text="提示文本~">
      <button type="button">鼠标移入!</button>
    </Tooltip>
  );
}
