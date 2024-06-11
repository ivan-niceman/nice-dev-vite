import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Privacy from "../Privacy/Privacy";
import ScrollUp from "../ScrollUp/ScrollUp";
import { YMInitializer } from 'react-yandex-metrika';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
              <ScrollUp />
              <YMInitializer accounts={[91061480]} options={{webvisor: true}}/>
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Privacy />
              <Footer />
              <ScrollUp />
            </>
          }
        />
      </Routes>
    </div>
  );
}
