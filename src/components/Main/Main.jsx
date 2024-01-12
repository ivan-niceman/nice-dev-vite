import About from "../About/About";
import AboutWork from "../AboutWork/AboutWork";
import OurServices from "../OurServices/OurServices";
import Price from "../Price/Price";
import Portfolio from "../Portfolio/Portfolio";
import Questions from "../Questions/Questions";

export default function Main() {
  return (
    <main className="main">
      <About />
      <AboutWork />
      <OurServices />
      <Price />
      <Portfolio />
      <Questions />
    </main>
  );
}
