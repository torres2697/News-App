import "./contacts.scss";
import author from "../../img/author.jpg";
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts-wrapper">
          <div className="contacts-info">
            <a className="contacts-info__tel" href="tel:+380975164432">
              +38 097 516 44 32
            </a>
            <span className="contacts-info__name">
              Mihail <br />
              Shabelnik
            </span>
            <a
              className="contacts-info__mail"
              href="mailto:misha.shabelnik@gmail.com"
            >
              misha.shabelnik@gmail.com
            </a>
            <p className="contacts-info__position">Front-end developer</p>
            <div className="contacts-info__tech">
              HTML, CSS (SCSS), JS (ES5, ES6), <span>React.js</span>
            </div>
          </div>
          <div className="contacts-picture">
            <img src={author} alt="author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
