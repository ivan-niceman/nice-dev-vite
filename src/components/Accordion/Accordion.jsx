import "./Accordion.css";
import { accordionContent } from "../../utils/accordionContent";

export default function Accordion() {
  return (
    <ul className="accordion" id="accordionExample">
      {accordionContent.map(({ title, content }, index) => (
        <li className="card accordion-item" key={index}>
          <h2 className="card-header">
            <button
              className="accordion-button accordion__button-image collapsed"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${index}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="collapse"
            data-parent="#accordionExample"
          >
            <p className="card-body questions__paragraph">{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
