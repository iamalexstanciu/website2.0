import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="buttons-redirect-2">
        <p className="buttons-redirect-2-btn">Newsletter</p>
        <p className="buttons-redirect-2-btn">Podcast</p>
        <p className="buttons-redirect-2-btn">Press</p>
        <p className="socials">
          <svg
            className="negative"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_26)">
              <path
                d="M8.44732 24.3345C18.5776 24.3345 24.12 15.9396 24.12 8.66183C24.12 8.42583 24.1147 8.18458 24.1043 7.94858C25.1824 7.16887 26.1129 6.20309 26.8519 5.09662C25.8477 5.54337 24.7816 5.83514 23.6899 5.96196C24.8394 5.27296 25.7001 4.19057 26.1124 2.91543C25.031 3.55629 23.8484 4.00835 22.6153 4.25226C21.7845 3.36945 20.686 2.78492 19.4896 2.58905C18.2933 2.39318 17.0657 2.59688 15.9967 3.16866C14.9277 3.74043 14.0769 4.64843 13.5757 5.75227C13.0745 6.85611 12.9509 8.09431 13.224 9.27544C11.0344 9.16556 8.89237 8.59677 6.93671 7.60593C4.98105 6.61509 3.25544 5.22432 1.87176 3.52379C1.1685 4.7363 0.953304 6.17108 1.2699 7.53655C1.5865 8.90202 2.41114 10.0957 3.57623 10.875C2.70155 10.8472 1.84604 10.6117 1.08037 10.188V10.2562C1.07958 11.5286 1.51948 12.762 2.32527 13.7468C3.13106 14.7316 4.25302 15.4069 5.50043 15.658C4.69019 15.8797 3.8398 15.912 3.01506 15.7524C3.36706 16.8467 4.05191 17.8038 4.97405 18.4901C5.89618 19.1765 7.00959 19.5578 8.15887 19.5809C6.20773 21.1135 3.79749 21.9448 1.31637 21.9409C0.876363 21.9402 0.436789 21.9133 0 21.8601C2.52056 23.4772 5.45264 24.3361 8.44732 24.3345Z"
                fill="#fc4308"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_26">
                <rect width="26.8519" height="26.8519" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="negative">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.2776 2.41772C17.8649 2.41772 18.2897 2.43345 19.7005 2.49638C21.0116 2.55407 21.7196 2.77434 22.1916 2.9579C22.8157 3.19915 23.2667 3.49284 23.7335 3.9596C24.2055 4.4316 24.4939 4.87739 24.7352 5.50148C24.9187 5.97349 25.139 6.68674 25.1967 7.99262C25.2596 9.40864 25.2754 9.83344 25.2754 13.4154C25.2754 17.0027 25.2596 17.4275 25.1967 18.8383C25.139 20.1494 24.9187 20.8574 24.7352 21.3294C24.4939 21.9535 24.2002 22.4045 23.7335 22.8713C23.2615 23.3433 22.8157 23.6317 22.1916 23.873C21.7196 24.0565 21.0063 24.2768 19.7005 24.3345C18.2844 24.3974 17.8596 24.4132 14.2776 24.4132C10.6904 24.4132 10.2656 24.3974 8.85483 24.3345C7.5437 24.2768 6.83569 24.0565 6.36369 23.873C5.73959 23.6317 5.28856 23.338 4.8218 22.8713C4.3498 22.3993 4.06135 21.9535 3.8201 21.3294C3.63655 20.8574 3.41628 20.1441 3.35859 18.8383C3.29565 17.4222 3.27992 16.9974 3.27992 13.4154C3.27992 9.8282 3.29565 9.40339 3.35859 7.99262C3.41628 6.6815 3.63655 5.97349 3.8201 5.50148C4.06135 4.87739 4.35504 4.42636 4.8218 3.9596C5.29381 3.48759 5.73959 3.19915 6.36369 2.9579C6.83569 2.77434 7.54895 2.55407 8.85483 2.49638C10.2656 2.43345 10.6904 2.41772 14.2776 2.41772ZM14.2776 0C10.6327 0 10.1764 0.0157335 8.74469 0.0786675C7.31819 0.141602 6.33747 0.37236 5.48786 0.702763C4.60153 1.0489 3.85157 1.50517 3.10685 2.25514C2.35689 2.99986 1.90062 3.74982 1.55448 4.6309C1.22407 5.48575 0.993317 6.46123 0.930383 7.88773C0.867449 9.32473 0.851715 9.781 0.851715 13.4259C0.851715 17.0709 0.867449 17.5271 0.930383 18.9589C0.993317 20.3854 1.22407 21.3661 1.55448 22.2157C1.90062 23.102 2.35689 23.852 3.10685 24.5967C3.85157 25.3414 4.60153 25.803 5.48261 26.1438C6.33747 26.4742 7.31294 26.705 8.73945 26.7679C10.1712 26.8309 10.6275 26.8466 14.2724 26.8466C17.9173 26.8466 18.3736 26.8309 19.8053 26.7679C21.2319 26.705 22.2126 26.4742 23.0622 26.1438C23.9433 25.803 24.6932 25.3414 25.4379 24.5967C26.1827 23.852 26.6442 23.102 26.9851 22.221C27.3155 21.3661 27.5462 20.3906 27.6092 18.9641C27.6721 17.5324 27.6878 17.0761 27.6878 13.4312C27.6878 9.78624 27.6721 9.32997 27.6092 7.89822C27.5462 6.47172 27.3155 5.49099 26.9851 4.64138C26.6547 3.74982 26.1984 2.99986 25.4484 2.25514C24.7037 1.51042 23.9538 1.0489 23.0727 0.708008C22.2178 0.377604 21.2423 0.146846 19.8158 0.083912C18.3788 0.0157335 17.9226 0 14.2776 0Z"
                fill="#fc4308"
              />
              <path
                d="M14.2792 6.52942C10.4717 6.52942 7.38272 9.61843 7.38272 13.4259C7.38272 17.2334 10.4717 20.3225 14.2792 20.3225C18.0868 20.3225 21.1758 17.2334 21.1758 13.4259C21.1758 9.61843 18.0868 6.52942 14.2792 6.52942ZM14.2792 17.8995C11.8091 17.8995 9.80568 15.8961 9.80568 13.4259C9.80568 10.9558 11.8091 8.95238 14.2792 8.95238C16.7494 8.95238 18.7528 10.9558 18.7528 13.4259C18.7528 15.8961 16.7494 17.8995 14.2792 17.8995Z"
                fill="#fc4308"
              />
              <path
                d="M23.0568 6.25664C23.0568 7.14821 22.3331 7.8667 21.4467 7.8667C20.5552 7.8667 19.8367 7.14296 19.8367 6.25664C19.8367 5.36507 20.5604 4.64658 21.4467 4.64658C22.3331 4.64658 23.0568 5.37032 23.0568 6.25664Z"
                fill="#fc4308"
              />
            </svg>
          </div>
          <div className="negative">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.5673 0H2.68555C1.58945 0 0.703125 0.865343 0.703125 1.93522V24.9114C0.703125 25.9813 1.58945 26.8519 2.68555 26.8519H25.5673C26.6634 26.8519 27.555 25.9813 27.555 24.9166V1.93522C27.555 0.865343 26.6634 0 25.5673 0ZM8.66952 22.8818H4.6837V10.0642H8.66952V22.8818ZM6.67661 8.31778C5.39696 8.31778 4.36379 7.28461 4.36379 6.0102C4.36379 4.73579 5.39696 3.70262 6.67661 3.70262C7.95103 3.70262 8.98419 4.73579 8.98419 6.0102C8.98419 7.27937 7.95103 8.31778 6.67661 8.31778ZM23.5849 22.8818H19.6043V16.6513C19.6043 15.1671 19.5781 13.2529 17.5327 13.2529C15.4612 13.2529 15.1465 14.8734 15.1465 16.5464V22.8818H11.1712V10.0642H14.9891V11.8159H15.0416C15.5713 10.8089 16.8719 9.74429 18.8071 9.74429C22.8402 9.74429 23.5849 12.398 23.5849 15.8489V22.8818Z"
                fill="#fc4308"
              />
            </svg>
          </div>
        </p>
      </div>
      <div className="buttons-redirect">
        <p className="buttons-redirect-btn">Home</p>
        <p className="buttons-redirect-btn">Our Work</p>
        <p className="buttons-redirect-btn">Who we are</p>
        <p className="buttons-redirect-btn">Get in touch</p>
        <p className="buttons-redirect-btn">Data Policy</p>
      </div>
      <div className="text-footer">
        <h3 className="heading-footer">Web Solutions, Tailored for You</h3>
        <p className="description-text">
          We're dedicated to crafting exceptional web experiences. Our team of
          experts brings innovation and expertise to every project, turning your
          vision into reality. Let's collaborate to build the digital future
          together.
        </p>
      </div>
      <div className="logo-footer">upvisionMedia ©</div>
    </section>
  );
};

export default Footer;
