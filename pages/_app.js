import "../styles/globals.css";
import ReState from "@useState/ReState";
import Menu from "../app/project/Menu";
import Footer from "../app/project/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ReState>
      <Menu />
      <div className="app">
        <Component {...pageProps} />
      </div>
      <div id="__modal"></div>
      <Footer />
    </ReState>
  );
}

export default MyApp;
