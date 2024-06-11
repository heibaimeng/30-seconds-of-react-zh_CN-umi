import React from "react";
import styles from "./Tabs.css";

function TabItem(props) {
  return <div {...props} />;
}

function Tabs(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  const changeTab = newIndex => {
    if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === TabItem.name);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["tab-menu"]}>
        {items.map(({ props: { index, label } }) => (
          <button
            type="button"
            onClick={() => changeTab(index)}
            key={index}
            className={bindIndex === index ? styles["focus"] : ""}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles["tab-view"]}>
        {items.map(({ props }) => (
          <div
            {...props}
            className={styles["tab-view_item"]}
            key={props.index}
            style={{ display: bindIndex === props.index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function() {
  return (
    <Tabs defaultIndex="1" onTabClick={console.log}>
      <TabItem label="A" index="1">
        A 选修卡的内容
      </TabItem>
      <TabItem label="B" index="2">
        B 选修卡的内容
      </TabItem>
    </Tabs>
  );
}
