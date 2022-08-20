import "../styles/globals.css";
import ReState from "@useState/ReState";
import Menu from "../app/project/Menu";
import Footer from "../app/project/Footer";
import { BackTop } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <ReState>
      <Menu />
      <div className="app">
        <Component {...pageProps} />
        <BackTop>
          <div>UP</div>
        </BackTop>
      </div>
      <div id="__modal"></div>
      <Footer />
    </ReState>
  );
}

export default MyApp;
