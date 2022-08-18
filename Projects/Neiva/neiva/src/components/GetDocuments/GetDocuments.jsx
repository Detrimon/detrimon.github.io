import cn from "classnames";
// import ContactItem from "../common/ContactItem";
import PhoneItem from "../common/PhoneItem";
import Socials from "../common/Socials";
import StyledLink from "../common/StyledLink";
import Fold from "../common/Fold";
import FoldContent from "./FoldContent";
import styles from "./GetDocuments.module.scss";

const GetDocuments = () => {
  return (
    <section
      id="OrderDocument"
      className={cn(
        styles.getDocuments,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className="container min-container">
        <div className={cn("flex-grid", styles.getDocuments__headerBlock)}>
          <div
            className={cn(
              "col-4 col-lg-half",
              styles.getDocuments__headerBlockItem
            )}
          >
            <h1 className={cn("ws-title-h1", styles.getDocuments__title)}>
              Получить документ
            </h1>
          </div>
          <div className="col-1 col-lg-hide"></div>
          <div
            className={cn(
              "col-4 col-lg-half",
              styles.getDocuments__headerBlockItem
            )}
          >
            <p className={styles.getDocuments__titleText}>
              В этом разделе вы можете ознакомиться с документами о вашей
              задолженности.
            </p>
            <p className={styles.getDocuments__titleText}>
              Для этого выберете нужную вам справку и закажите ее.
            </p>
          </div>
        </div>
        <div className={styles.getDocuments__foldsBlock}>
          {/* Справка об остатке долка */}

          <Fold foldText="Справка об отсатке долга">
            <FoldContent
              formId="docOstatok"
              aDescription={[
                "Справка об остатке долга подтверждает, что заемщик .........",
                "Если Вы оплатили...",
                "Справка выдается ...",
              ]}
              aFields={[
                "fio",
                "passport",
                "birthday",
                "contract",
                "phone",
                "email",
              ]}
              sampleURL="https://123.ru"
              sampleDescription="Образец справки"
              type={1}
            />
          </Fold>

          {/* Справка об отсутствии задолженности */}

          <Fold foldText="Справка об отсутствии задолженности">
            <FoldContent
              formId="docZadolzh"
              aDescription={[
                "Справка об отсутствии задолженности подтверждает, что заемщик полностью исполнил свои обязательства перед кредитором",
                "Если Вы оплатили свою задолженность перед банком или микрофинансовой компанией, мы советуем Вам запросить справку об отсутствии задолженности.",
                "Справка выдается только тогда, когда обязательства полностью погашены.",
              ]}
              aFields={[
                "fio",
                "passport",
                "birthday",
                "contract",
                "phone",
                "email",
              ]}
              sampleURL="https://123.ru"
              sampleDescription="Образец справки"
              type={2}
            />
          </Fold>

          {/* Справка об отсутствии задолженности */}

          <Fold foldText="Справка об отсутствии задолженности по ипотеке">
            <FoldContent
              formId="docIpoteka"
              aDescription={[
                "Справка об отсутствии задолженности подтверждает, что заемщик полностью исполнил свои обязательства перед кредитором",
                "Если Вы оплатили свою задолженность перед банком или микрофинансовой компанией, мы советуем Вам запросить справку об отсутствии задолженности.",
                "Справка выдается только тогда, когда обязательства полностью погашены.",
              ]}
              aFields={[
                "fio",
                "passport",
                "birthday",
                "contract",
                "address",
                "phone",
                "email",
              ]}
              sampleURL="https://123.ru"
              sampleDescription="Образец справки"
              type={2}
            />
          </Fold>
        </div>

        <div className={cn("flex-grid", styles.writeUs)}>
          <div className="col-3 col-xl-1 col-lg-hide"></div>
          <div className={"col-6 col-xl-3 col-lg-full"}>
            <p className={styles.writeUs__titleText}>
              Не нашли нужную справку в перечне выше? Свяжитесь с нами удобным
              способом, и мы поможем.
            </p>
            <div className={styles.writeUs__contacts}>
              <PhoneItem withIcon></PhoneItem>
              <Socials withText></Socials>
              {/* <ContactItem> */}
              <div className={styles.writeUs__styledLink}>
                <StyledLink link="http://yandex.ru">
                  Написать обращение
                </StyledLink>
              </div>

              {/* </ContactItem> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetDocuments;
