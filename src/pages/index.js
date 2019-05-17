import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          要开始，请编辑 <code>src/pages/index.js</code> 并保存以重新加载。
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">入门</a>
        </li>
      </ul>
    </div>
  );
}
