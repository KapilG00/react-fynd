import styles from "../Type2.module.css";

function SplitPane(props) {
  const { left, right } = props;

  return (
    <div className={styles.SplitPane}>
      <div className={styles["SplitPane-left"]}>{left}</div>
      <div className={styles["SplitPane-right"]}>{right}</div>
    </div>
  );
}

export default SplitPane;
