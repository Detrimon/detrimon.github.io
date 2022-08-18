import styles from "./WriteUs.module.scss";
import cn from "classnames";
import MsgType from "./MsgType";
import WriteUsForm from "./WriteUsForm";

const WriteUs = () => {
  return (
    <section
      className={cn(
        styles.writeUs,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className="container min-container">
        <div className={cn("flex-grid", styles.writeUs__titleBlock)}>
          <div className="col-4 col-lg-half col-md-full">
            <h1 className="ws-title-h1">Напишите нам</h1>
          </div>
          <div className="col-1 col-lg-hide"></div>
          <div className="col-4 col-lg-half col-md-full">
            <p>
              И мы обязательно поможем найти решение для урегулирования вашей
              задолженности и восстановления кредитной истории
            </p>
          </div>
        </div>

        <div className={cn("flex-grid", styles.writeUs__contentBlock)}>
          <div className="col-4 col-lg-half">
            <p>Выберите тему обращения</p>
            <div className={styles.writeUs__msgType}>
              <MsgType></MsgType>
            </div>
          </div>
          <div className="col-5 col-lg-half">
            <WriteUsForm></WriteUsForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteUs;
