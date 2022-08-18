import "../../scss/styles.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainPage from "../_MainPage";
import AboutPage from "../_AboutPage";
import Header from "../Header";
import WriteUs from "../WriteUs";
import Footer from "../Footer";

import ErrorHandler from "../ErrorHandler";
import { CookiesProvider } from "../../services/cookies/";
import ReadCookieOnLoad from "../ReadCookieOnLoad";

function App() {
  return (
    <ErrorHandler>
      <CookiesProvider>
        <ReadCookieOnLoad></ReadCookieOnLoad>

        <Router>
          <Header></Header>
          <Routes>
            {/* <Route path="/*" element={<Header />} /> */}
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/" element={<Navigate to="/MainPage" replace />} />
          </Routes>
          <WriteUs></WriteUs>
          <Footer></Footer>
        </Router>
      </CookiesProvider>
    </ErrorHandler>
  );
}

export default App;
