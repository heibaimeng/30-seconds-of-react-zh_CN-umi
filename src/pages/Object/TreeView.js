import React from 'react'
import styles from "./TreeView.css";

function TreeView({
  // 使用对象解构来设置某些传入属性的默认值
  data,
  toggled = true, // 折叠按钮，是否处于折叠状态
  name = null, // 当前属性名，如果子元素是对象显示
  isLast = true, // 是否最后一个
  isChildElement = false, // 是否子元素
  isParentToggled = true // 是否被父节点折叠
}) {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}
      // 如果父折叠就隐藏
      className={isParentToggled ? styles["tree-element"] : styles.collapsed}
    >
      {/* 折叠按钮，点击设置反状态 */}
      <span
        className={
          isToggled ? styles.toggler : `${styles.toggler} ${styles.closed}`
        }
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {/* 开始符 */}
      {Array.isArray(data) ? "[" : "{"}
      {/* 子元素被折叠 */}
      {!isToggled && "..."}
      {/* 渲染对象的子元素 */}
      {Object.keys(data).map((v, i, a) =>
        // 是对象，递归调用自身
        typeof data[v] == "object" ? (
          <TreeView
            data={data[v]}
            key={i}
            isLast={i === a.length - 1}
            // 子元素的属性名，对象需要显示属性名，数组不显示
            name={Array.isArray(data) ? null : v}
            isChildElement
            isParentToggled={isParentToggled && isToggled}
          />
        ) : ( // 不是对象，显示内容即可
          <p
            key={i}
            style={{ marginLeft: 16 + "px" }}
            className={isToggled ? styles["tree-element"] : styles.collapsed}
          >
            {Array.isArray(data) ? "" : <strong>{v}: </strong>}
            {data[v]}
            {i === a.length - 1 ? "" : ","}
          </p>
        )
      )}
      {/* 结束符 */}
      {Array.isArray(data) ? "]" : "}"}
      {/* 不是最后元素，加个逗号 */}
      {!isLast ? "," : ""}
    </div>
  );
}

export default function() {
  let data = {
    lorem: {
      ipsum: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          ["laoreet", "tincidunt"],
          ["vestibulum", "ante"]
        ]
      },
      ipsum: "primis"
    }
  };
  return <TreeView data={data} name="data" />;
}
