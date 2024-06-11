import React from "react";
import styles from "./Modal.css";

function Modal({ isVisible = false, title, content, footer, onClose }) {
  React.useEffect(() => {
    // 监听事件
    document.addEventListener("keydown", keydownHandler);
    // 取消监听
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key }) {
    // esc 键，关闭模态框
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }
  // 控制模态框显示
  return !isVisible ? null : (
    <div className={styles["modal"]} onClick={onClose}>
      <div
        className={styles["modal-dialog"]}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles["modal-header"]}>
          <h3 className={styles["modal-title"]}>{title}</h3>
          <span className={styles["modal-close"]} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles["modal-body"]}>
          <div className={styles["modal-content"]}>{content}</div>
        </div>
        {footer && <div className={styles["modal-footer"]}>{footer}</div>}
      </div>
    </div>
  );
}

// 将组件添加到 render 函数
function App() {
  const [isModal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      {/* 按钮显示模态框 */}
      <button type="button" onClick={() => setModal(true)}>显示模态框</button>
      <Modal
        isVisible={isModal}
        title="标题"
        content={<p>正文</p>}
        footer={<button type="button" onClick={() => setModal(false)}>关闭模态框</button>}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
}

export default function() {
  return <App />;
}
