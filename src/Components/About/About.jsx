import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT INSTITUTE</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          At NintyPlus Institute, we believe education is more than just marks—it’s about unlocking potential and building confident learners. Founded with the mission to help students consistently achieve 90+ and beyond, we combine experienced teachers, innovative methods, and a supportive environment to make learning effective and enjoyable.
        </p>

        <p>
          Our programs span across Science, Commerce, and Humanities, ensuring every student gets the right guidance—whether it’s mastering fundamentals, preparing for board exams, or excelling in competitive challenges.
        </p>

        <p>
         At NintyPlus, classrooms go beyond textbooks. We focus on concept clarity, regular practice, and personal mentorship, helping students develop problem-solving skills and self-discipline. More importantly, we aim to nurture curiosity and inspire students to dream bigger.

We’re not just shaping exam scores—we’re shaping futures full of confidence, knowledge, and success.
        </p>
      </div>
    </div>
  );
};

export default About;