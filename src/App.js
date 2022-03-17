// Static
import logo from "./static/logo.png";
// Css
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" width={64} height={64} />
        </div>
        <div className="header__text">
          <div className="header__text_title">Фотостудии Перми</div>
          <div className="header__text_text">
            Все фотостудии Перми на одном сайте
          </div>
        </div>
      </div>
      <div className="disctricts">123</div>
      <div className="content">123</div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
