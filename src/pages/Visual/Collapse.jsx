import React from "react";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      <button
        type="button"
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "显示" : "隐藏"} 内容
      </button>
      <div
        className="collapse-content"
        // 决定显示和折叠
        style={isCollapsed ? style.collapsed : style.expanded}
        // aria-expanded 是给 Screen Reader 用来 判断当前元素状态的辅助属性
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

export default function() {
  return (
    <Collapse>
      <h1>This is a collapse</h1>
      <p>Hello world!</p>
    </Collapse>
  );
}
