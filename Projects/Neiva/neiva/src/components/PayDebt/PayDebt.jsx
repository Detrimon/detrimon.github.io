import cn from "classnames";
import styles from "./PayDebt.module.scss";
import DebtPayForm from "../DebtPayForm";

const PayDebt = () => {
  return (
    <section
      id="Pay"
      className={cn(
        styles.payDebt,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className="container min-container">
        <div className={cn("flex-grid", styles.payDebt__headerBlock)}>
          <div className={"col-5 col-lg-half col-md-full"}>
            <h1 className={cn("ws-title-h1", styles.payDebt__title)}>
              Оплатить задолженность
            </h1>
          </div>
          <div
            className={cn(
              "col-4 col-lg-half col-md-full",
              styles.payDebt__titleTextBlock
            )}
          >
            <p className={styles.payDebt__titleText}>
              Остановите увеличение долга одним переводом.
            </p>
            <p className={styles.payDebt__titleText}>
              Внесите платеж. Компания, которая выдала кредит поймет, что вы на
              связи и пойдет навстречу.
            </p>
            <p className={styles.payDebt__titleText}>
              Оплатить задолженность вы можете удобным для вас способом.
            </p>
          </div>
        </div>
        <div className={cn("flex-grid", styles.payDebtForm)}>
          <div className="col-4 col-lg-half col-md-full">
            <h3 className="ws-title-h3">
              Заполните форму и подтвердите ваши данные
            </h3>
          </div>
          <div className="col-5 col-lg-half col-md-full">
            <DebtPayForm formId="idDebtForm"></DebtPayForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayDebt;
