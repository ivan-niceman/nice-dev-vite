import "./Price.css";
import { priceContent } from "../../utils/priceContent";

export default function Price() {
  return (
    <section className="our-price" id="price">
      <h2 className="main__title">сколько стоит?</h2>
      <ul className="price-list">
        {priceContent.map(({ work, price, time, description }, index) => (
          <li className="price-item" key={index}>
            <p className="price-works">{work}</p>
            <div className="price-block">
              <p className="price-coast">{price}</p>
              <p className="price-working-time">{time}</p>
            </div>
            <p className="price-about-works">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
