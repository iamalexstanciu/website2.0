import React from "react";
import "../style/prices.css";

function Prices() {
  return (
    <div className="section-prices" id="prices">
      <div className="container-prices">
        <h4
          style={{
            position: "absolute",
            left: "10%",
            top: "10%",
            fontSize: "40px",
          }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical">
          Prices
        </h4>
        <div
          class="widget-price widget-1"
          data-scroll
          data-scroll-speed="5"
          data-scroll-direction="vertical">
          <h2 class="title-price">Basic</h2>
          <h3 class="cost">€600</h3>
          <div class="frame-details">
            <div class="description-plan">
              <span>
                <span class="description-plan-span">Basic:</span>
                <span class="description-plan-span2"></span>
                <span class="description-plan-span3">
                  <br />
                  <br />
                  Website design One page (scrollable) up to 3 sections.
                </span>
              </span>
            </div>
            <div class="details-plan-explained">
              <div class="line line1"></div>
              <div class="details-plan">
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_28"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_28)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">1 page/screen</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_33"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_33)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Responsive design</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_38"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_38)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Source file</h4>
                </div>
              </div>
            </div>
            <div class="line line2"></div>
            <div class="delivery">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_1_45"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32">
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_45)">
                  <path
                    d="M20.4 22.2667L22.2667 20.4L17.3334 15.4667V9.33335H14.6667V16.5334L20.4 22.2667ZM16 29.3334C14.1556 29.3334 12.4222 28.9834 10.8 28.2834C9.1778 27.5834 7.76669 26.6334 6.56669 25.4334C5.36669 24.2334 4.41669 22.8222 3.71669 21.2C3.01669 19.5778 2.66669 17.8445 2.66669 16C2.66669 14.1556 3.01669 12.4222 3.71669 10.8C4.41669 9.1778 5.36669 7.76669 6.56669 6.56669C7.76669 5.36669 9.1778 4.41669 10.8 3.71669C12.4222 3.01669 14.1556 2.66669 16 2.66669C17.8445 2.66669 19.5778 3.01669 21.2 3.71669C22.8222 4.41669 24.2334 5.36669 25.4334 6.56669C26.6334 7.76669 27.5834 9.1778 28.2834 10.8C28.9834 12.4222 29.3334 14.1556 29.3334 16C29.3334 17.8445 28.9834 19.5778 28.2834 21.2C27.5834 22.8222 26.6334 24.2334 25.4334 25.4334C24.2334 26.6334 22.8222 27.5834 21.2 28.2834C19.5778 28.9834 17.8445 29.3334 16 29.3334ZM16 26.6667C18.9556 26.6667 21.4722 25.6278 23.55 23.55C25.6278 21.4722 26.6667 18.9556 26.6667 16C26.6667 13.0445 25.6278 10.5278 23.55 8.45002C21.4722 6.37224 18.9556 5.33335 16 5.33335C13.0445 5.33335 10.5278 6.37224 8.45002 8.45002C6.37224 10.5278 5.33335 13.0445 5.33335 16C5.33335 18.9556 6.37224 21.4722 8.45002 23.55C10.5278 25.6278 13.0445 26.6667 16 26.6667Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>

              <h4 class="detail-text">3 days delivery</h4>
            </div>
            <div class="revision">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.3 6.66669L16 2.66669V5.33335C10.2187 5.33335 5.33337 10.2187 5.33337 16C5.33337 21.7827 10.2187 26.6667 16 26.6667C21.7827 26.6667 26.6667 21.7827 26.6667 16H24C24 20.336 20.336 24 16 24C11.664 24 8.00004 20.336 8.00004 16C8.00004 11.664 11.664 8.00002 16 8.00002V10.6667L21.3 6.66669Z"
                  fill="black"
                />
              </svg>

              <h4 class="detail-text">1 Revision</h4>
            </div>
          </div>
        </div>
        <div
          class="widget-price widget-2"
          data-scroll
          data-scroll-speed="5"
          data-scroll-direction="vertical">
          <h2 class="title-price">Premium</h2>
          <h3 class="cost"> €900</h3>
          <div class="frame-details">
            <div class="description-plan">
              <span>
                <span class="description-plan-span">Premium:</span>
                <span class="description-plan-span2"></span>
                <span class="description-plan-span3">
                  <br />
                  <br />
                  Website design One page (scrollable) up to 6 sections.
                </span>
              </span>
            </div>
            <div class="details-plan-explained">
              <div class="line line1"></div>
              <div class="details-plan">
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_28"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_28)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">1 page/screen</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_33"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_33)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Responsive design</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_38"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_38)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Source file</h4>
                </div>
              </div>
            </div>
            <div class="line line2"></div>
            <div class="delivery">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_1_45"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32">
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_45)">
                  <path
                    d="M20.4 22.2667L22.2667 20.4L17.3334 15.4667V9.33335H14.6667V16.5334L20.4 22.2667ZM16 29.3334C14.1556 29.3334 12.4222 28.9834 10.8 28.2834C9.1778 27.5834 7.76669 26.6334 6.56669 25.4334C5.36669 24.2334 4.41669 22.8222 3.71669 21.2C3.01669 19.5778 2.66669 17.8445 2.66669 16C2.66669 14.1556 3.01669 12.4222 3.71669 10.8C4.41669 9.1778 5.36669 7.76669 6.56669 6.56669C7.76669 5.36669 9.1778 4.41669 10.8 3.71669C12.4222 3.01669 14.1556 2.66669 16 2.66669C17.8445 2.66669 19.5778 3.01669 21.2 3.71669C22.8222 4.41669 24.2334 5.36669 25.4334 6.56669C26.6334 7.76669 27.5834 9.1778 28.2834 10.8C28.9834 12.4222 29.3334 14.1556 29.3334 16C29.3334 17.8445 28.9834 19.5778 28.2834 21.2C27.5834 22.8222 26.6334 24.2334 25.4334 25.4334C24.2334 26.6334 22.8222 27.5834 21.2 28.2834C19.5778 28.9834 17.8445 29.3334 16 29.3334ZM16 26.6667C18.9556 26.6667 21.4722 25.6278 23.55 23.55C25.6278 21.4722 26.6667 18.9556 26.6667 16C26.6667 13.0445 25.6278 10.5278 23.55 8.45002C21.4722 6.37224 18.9556 5.33335 16 5.33335C13.0445 5.33335 10.5278 6.37224 8.45002 8.45002C6.37224 10.5278 5.33335 13.0445 5.33335 16C5.33335 18.9556 6.37224 21.4722 8.45002 23.55C10.5278 25.6278 13.0445 26.6667 16 26.6667Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>

              <h4 class="detail-text">7 days delivery</h4>
            </div>
            <div class="revision">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.3 6.66669L16 2.66669V5.33335C10.2187 5.33335 5.33337 10.2187 5.33337 16C5.33337 21.7827 10.2187 26.6667 16 26.6667C21.7827 26.6667 26.6667 21.7827 26.6667 16H24C24 20.336 20.336 24 16 24C11.664 24 8.00004 20.336 8.00004 16C8.00004 11.664 11.664 8.00002 16 8.00002V10.6667L21.3 6.66669Z"
                  fill="black"
                />
              </svg>

              <h4 class="detail-text">2 Revision</h4>
            </div>
          </div>
        </div>
        <div
          class="widget-price widget-3"
          data-scroll
          data-scroll-speed="5"
          data-scroll-direction="vertical">
          <h2 class="title-price">Pro</h2>
          <h3 class="cost">€1400</h3>
          <div class="frame-details">
            <div class="description-plan">
              <span>
                <span class="description-plan-span">Pro:</span>
                <span class="description-plan-span2"></span>
                <span class="description-plan-span3">
                  <br />
                  <br />
                  Website design One page (scrollable) up to 10 sections.
                </span>
              </span>
            </div>
            <div class="details-plan-explained">
              <div class="line line1"></div>
              <div class="details-plan">
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_28"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_28)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">1 page/screen</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_33"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_33)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Responsive design</h4>
                </div>
                <div class="service-details">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1_38"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_38)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#40238C"
                      />
                    </g>
                  </svg>

                  <h4 class="h4-detail">Source file</h4>
                </div>
              </div>
            </div>
            <div class="line line2"></div>
            <div class="delivery">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_1_45"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32">
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_45)">
                  <path
                    d="M20.4 22.2667L22.2667 20.4L17.3334 15.4667V9.33335H14.6667V16.5334L20.4 22.2667ZM16 29.3334C14.1556 29.3334 12.4222 28.9834 10.8 28.2834C9.1778 27.5834 7.76669 26.6334 6.56669 25.4334C5.36669 24.2334 4.41669 22.8222 3.71669 21.2C3.01669 19.5778 2.66669 17.8445 2.66669 16C2.66669 14.1556 3.01669 12.4222 3.71669 10.8C4.41669 9.1778 5.36669 7.76669 6.56669 6.56669C7.76669 5.36669 9.1778 4.41669 10.8 3.71669C12.4222 3.01669 14.1556 2.66669 16 2.66669C17.8445 2.66669 19.5778 3.01669 21.2 3.71669C22.8222 4.41669 24.2334 5.36669 25.4334 6.56669C26.6334 7.76669 27.5834 9.1778 28.2834 10.8C28.9834 12.4222 29.3334 14.1556 29.3334 16C29.3334 17.8445 28.9834 19.5778 28.2834 21.2C27.5834 22.8222 26.6334 24.2334 25.4334 25.4334C24.2334 26.6334 22.8222 27.5834 21.2 28.2834C19.5778 28.9834 17.8445 29.3334 16 29.3334ZM16 26.6667C18.9556 26.6667 21.4722 25.6278 23.55 23.55C25.6278 21.4722 26.6667 18.9556 26.6667 16C26.6667 13.0445 25.6278 10.5278 23.55 8.45002C21.4722 6.37224 18.9556 5.33335 16 5.33335C13.0445 5.33335 10.5278 6.37224 8.45002 8.45002C6.37224 10.5278 5.33335 13.0445 5.33335 16C5.33335 18.9556 6.37224 21.4722 8.45002 23.55C10.5278 25.6278 13.0445 26.6667 16 26.6667Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>

              <h4 class="detail-text">10 days delivery</h4>
            </div>
            <div class="revision">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.3 6.66669L16 2.66669V5.33335C10.2187 5.33335 5.33337 10.2187 5.33337 16C5.33337 21.7827 10.2187 26.6667 16 26.6667C21.7827 26.6667 26.6667 21.7827 26.6667 16H24C24 20.336 20.336 24 16 24C11.664 24 8.00004 20.336 8.00004 16C8.00004 11.664 11.664 8.00002 16 8.00002V10.6667L21.3 6.66669Z"
                  fill="black"
                />
              </svg>

              <h4 class="detail-text">4 Revision</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
