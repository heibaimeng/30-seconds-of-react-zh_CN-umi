import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          React 的 30 秒小片段：
          <a
            href="https://github.com/heibaimeng/30-seconds-of-react-Zh-CN-with-demo"
            target="_blank"
            rel="noreferrer noopener"
          >
            项目地址
          </a>
          ，
        </li>

        <li>
          是
          <a
            href="https://github.com/30-seconds/30-seconds-of-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            30-seconds-of-react
          </a>
          项目的中文版本，使用 umi.js 执行示例 demo 。
        </li>
      </ul>
    </div>
  );
}
