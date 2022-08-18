// import Header from "../Header";
import Welcome from "../Welcome";
import Debtors from "../Debtors";
import Appeal from "../Appeal";
import PayDebt from "../PayDebt";
import ContactUs from "../ContactUs";
import GetDocuments from "../GetDocuments";
import Questions from "../Questions";

const MainPage = () => {
  return (
    <>
      {/* <Header></Header> */}
      <Welcome></Welcome>
      <Debtors></Debtors>
      <Appeal></Appeal>
      <PayDebt></PayDebt>
      <ContactUs></ContactUs>
      <GetDocuments></GetDocuments>
      <Questions></Questions>
    </>
  );
};

export default MainPage;
