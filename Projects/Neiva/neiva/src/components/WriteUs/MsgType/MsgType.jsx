// import styles from "./MessageType.module.scss";
import styles from "./MsgType.module.scss";

const selectMsgSubject = (e) => {
  console.dir(e.target);
  console.log(e.target.dataset.selected);
  // const chosenSubject = e.target;
};

const MsgType = () => {
  return (
    <ul className={styles.msgType} onClick={(e) => selectMsgSubject(e)}>
      <li data-selected={false}>Жалоба</li>
      <li data-selected={false}>Получение справки</li>
      <li data-selected={false}>Вопрос о задолженности</li>
      <li data-selected={false}>Оплата</li>
      <li data-selected={false}>Трудоустройство</li>
      <li data-selected={false}>Другой вопрос</li>
    </ul>
  );
};

export default MsgType;
