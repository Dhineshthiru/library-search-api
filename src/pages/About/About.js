import React from "react";
import "./About.css";
import aboutImg from "../../images/libraryabout.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Bookhub is a book discovery service that was created to help
              readers find new books and authors. The company features free and
              discounted ebooks selected by its editorial team, as well as book
              recommendations, updates from authors, and articles about books.
              The service is free for readers and includes a website and
              personalized email newsletters.The Guardian called BookBub the
              “Groupon of e-books".
            </p>
            <p className="fs-17">
              Bookhub has millions of users in the United States, United
              Kingdom, Canada, and Australia. For publishers and authors,
              BookBub provides marketing tools that are intended to help them
              reach readers and sell more books. The company also operates an
              audiobook retailer called Chirp. The company is headquartered in
              Cambridge, Massachusetts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
