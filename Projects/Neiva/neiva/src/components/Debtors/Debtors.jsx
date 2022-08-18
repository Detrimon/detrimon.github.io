import cn from "classnames";
import styles from "./Debtors.module.scss";

const Debtors = () => {
  return (
    <section
      id="Debtors"
      className={cn(
        styles.debtors,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className={cn("container", "min-container")}>
        <div className={cn("flex-grid", styles.titleBlock)}>
          <div className={"col-5 col-lg-half col-sm-full"}>
            <h1 className={cn(styles.titleBlock__title, "ws-title-h1")}>
              Должникам
            </h1>
          </div>

          {/* <span className={styles.titleBlock__empty}></span> */}
          <div
            className={cn(
              "col-4 col-xl-half col-sm-full",
              styles.titleBlock__text
            )}
          >
            <p>
              Наши специалисты всегда готовы вас проконсультировать и предложить
              удобные способы урегулирования просроченной задолженности.{" "}
            </p>
          </div>
        </div>

        <div className={cn("flex-grid", styles.payBlock)}>
          <div
            className={cn(
              "col-4 col-lg-half col-md-full",
              styles.payBlock__imageContainer
            )}
          >
            <img src="assets/About_image.png" alt="" />
          </div>
          <div className="col-1 col-xl-hide"></div>
          <div
            className={cn(
              "col-4 col-xl-half col-md-full",
              styles.payBlock__textContainer
            )}
          >
            <a href="#123" className={styles.payBlock__titleContainer}>
              <h3 className={cn("ws-title-h3", styles.payBlock__title)}>
                Оплатить задолженность
              </h3>
              <span className="icon-arrow-right"></span>
            </a>
            <ul className={styles.payBlock__list}>
              <li>Он-лайн на сайте</li>
              <li>По QR-коду</li>
              <li>По реквизитам</li>
            </ul>
          </div>
        </div>
        <div className={cn("flex-grid", styles.docmentsBlock)}>
          <div
            className={cn(
              "col-5 col-lg-half col-md-full",
              styles.docmentsBlock__textContainer
            )}
          >
            <a href="#123" className={styles.docmentsBlock__titleContainer}>
              <h3 className={cn("ws-title-h3", styles.docmentsBlock__title)}>
                Получить документы
              </h3>
              <span className="icon-arrow-right"></span>
            </a>
            <ul className={styles.docmentsBlock__list}>
              <li>Справка об отсутствии долга</li>
              <li>Уведомление о договоре цессии</li>
              <li>График платежей и другие</li>
            </ul>
          </div>
          <div
            className={cn(
              "col-4 col-lg-half col-md-full",
              styles.docmentsBlock__imageContainer
            )}
          >
            <img src="assets/About_image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debtors;
