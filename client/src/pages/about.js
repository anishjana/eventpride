import React from "react"
import PageHeader from "../components/pageHeader"
import { Link } from "gatsby"

const About = props => {
  return (
    <div className="min-h-screen p-10 pb-4 text-justify">
      <div className="relative ">
        <Link to={`/`}>
          <i className="arrow left absolute top-12 left-10"></i>
        </Link>

        <PageHeader subtitle="Who are we?" mode="black"></PageHeader>
      </div>
      <section>
        <h4>Our Story</h4>
        <p>
          Founded in 2022, EventPride has been at the forefront of the event
          management industry. Our journey began with a simple yet powerful
          idea: to make every event remarkable, memorable, and stress-free for
          our clients. Since then, we have proudly planned and executed a wide
          range of events, from corporate gatherings to social celebrations,
          exceeding the expectations of our clients every time.
        </p>
      </section>

      <section>
        <h4>Our Mission</h4>
        <p>
          Our mission is to create experiences that leave a lasting impression.
          We strive to turn your vision into a reality by orchestrating every
          element of your event with precision and flair. We aim to relieve you
          of the stress and challenges that often come with event planning,
          allowing you to enjoy the process and savor the moments.
        </p>
      </section>

      <section>
        <h4>Our Approach</h4>
        <p>
          At EventPride, we believe that every event should be a reflection of
          your unique style and personality. Our approach is rooted in
          collaboration, as we work closely with you to understand your
          objectives, desires, and expectations. From the first brainstorming
          session to the final goodbye, we are dedicated to making your vision
          come to life.
        </p>
      </section>

      <section>
        <h4>What Sets Us Apart</h4>
        <ul>
          <li>
            Creativity: Our team is composed of creative minds who are
            constantly pushing the boundaries of innovation.
          </li>
          <li>
            Attention to Detail: It's the little things that make a big
            difference. We pay meticulous attention to detail, ensuring that
            every aspect of your event is flawless.
          </li>
          <li>
            Vendor Network: Over the years, we have built strong relationships
            with trusted vendors and suppliers. This network allows us to secure
            the best services and prices for your event.
          </li>
          <li>
            Problem Solvers: No challenge is too big for us. We thrive on
            solving problems and overcoming obstacles to ensure your event runs
            smoothly.
          </li>
          <li>
            Customer-Centric: Your satisfaction is our priority. We value your
            input and are always ready to adapt and adjust to meet your needs
            and preferences.
          </li>
        </ul>
      </section>

      <section>
        <h4>Let's Create Magic Together</h4>
        <p>
          EventPride is more than just an event planning company; we are your
          partner in creating unforgettable moments. We invite you to join us in
          turning your event into a cherished memory that you, your clients, and
          your guests will remember for a lifetime. Contact us today, and let's
          begin the journey to create magic together.
        </p>
      </section>
    </div>
  )
}

export default About
