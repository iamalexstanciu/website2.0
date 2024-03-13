import React from "react";
import "../style/testimonials.css";

const Testimonials = () => {
  return (
    <div className="section-testimonials" id="testimonials">
      <div className="left-side-testimonials">They are telling the truth</div>
      <div className="right-side-testimonials">
        <div class="card-container-testimonials">
          <p>
            <span>Luigi Collivasone</span>
            <h5 className="reveal-review">
              Professionalism, skills and skill. I had a great time. Very
              prepared. I was extremely satisfied! Courtesy and education
              combine with precision and scrupulousness in work. Excellent value
              for money.
            </h5>
          </p>
          <p>
            <span>HOVER ME</span>
          </p>
          <p>
            <span>HOVER ME</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
