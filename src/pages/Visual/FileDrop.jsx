import React from "react";
import styles from "./FileDrop.css";
function FileDrop(props) {
  const [drag, setDrag] = React.useState(false);
  const [filename, setFilename] = React.useState("");

  // 创建组件引用
  let dropRef = React.createRef();
  let dragCounter = 0;

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true);
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) setDrag(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files[0]);
      setFilename(e.dataTransfer.files[0].name);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  React.useEffect(() => {
    // 监听拖放事件
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);
    // 销毁时移除事件
    return function cleanup() {
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
  });

  return (
    <div
      // ref 引用
      ref={dropRef}
      className={
        drag
          ? `${styles.filedrop} ${styles.drag}`
          : filename
          ? `${styles.filedrop} ${styles.ready}`
          : styles.filedrop
      }
    >
      {filename && !drag ? <div>{filename}</div> : <div>Drop files here!</div>}
    </div>
  );
}

export default function() {
  return <FileDrop handleDrop={console.log} />;
}
