import React from "react";
function AccordionItem(props) {
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
      {/* 按钮，点击传入的 handleClick */}
      <button style={style.buttonStyle} onClick={() => props.handleClick()}>
        {props.label}
      </button>
      {/* 控制显示、隐藏状态 */}
      <div
        className="collapse-content"
        style={props.isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={props.isCollapsed}
      >
        {/* 内容 */}
        {props.children}
      </div>
    </div>
  );
}

function Accordion(props) {
  // 目前显示的 index
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  // 点击即把 bindIndex 设置为自己
  const changeItem = itemIndex => {
    if (typeof props.onItemClick === "function") props.onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  // 筛选出传入的 AccordionItem 组件，忽略其他
  const items = props.children.filter(
    // 组件名
    item => item.type.name === "AccordionItem"
  );

  return (
    <div className="wrapper">
      {items.map(({ props }) => (
        <AccordionItem
          isCollapsed={bindIndex === props.index}
          label={props.label}
          key={props.index}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </div>
  );
}

export default function() {
  return (
    <Accordion defaultIndex="1" onItemClick={console.log}>
      <AccordionItem label="A" index="1" key="1">
        Lorem ipsum
      </AccordionItem>
      <AccordionItem label="B" index="2" key="2">
        Dolor sit amet
      </AccordionItem>
    </Accordion>
  );
}
