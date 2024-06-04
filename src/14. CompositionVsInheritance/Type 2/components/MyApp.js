import SplitPane from "./SplitPane";
import styles from "../Type2.module.css";

export function Contacts() {
  return <div className={styles.Contacts}>Contacts!!</div>;
}

export function Chat() {
  return <div className={styles.Chat}>Chat!!</div>;
}

function MyApp() {
  return (
    <>
      <div className={styles.root}>
        <SplitPane left={<Contacts />} right={<Chat />} />
      </div>
    </>
  );
}

export default MyApp;
