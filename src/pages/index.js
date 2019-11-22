import styles from './index.css';
import Link from 'umi/link'

export default function () {
  return (
    <div className={styles.normal}>
      <div><Link to="/count">计数器</Link></div>
      <div><Link to="/todoList">todoList</Link></div>
    </div>
  );
}
