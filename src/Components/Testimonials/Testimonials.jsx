import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Screenshot 2025-08-18 144645.png'
import user_2 from '../../assets/Screenshot 2025-08-18 151120.png'
import user_3 from '../../assets/Screenshot 2025-08-18 151144.png'
import user_4 from '../../assets/WhatsApp Image 2025-07-25 at 16.56.06_6aae4105.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform =   `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx<0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>SUMIT SHARMA</h3>
                                <span>CHEMISTRY </span>
                            </div>
                        </div>
                        <p>
                            "Mr. Sumit Sharma is an inspiring Chemistry teacher who makes complex topics simple and engaging. With a strong command over both theory and practical applications, he helps students build a clear understanding of fundamental concepts. His classes are known for being interactive, filled with real-life examples that spark curiosity. By combining discipline with encouragement, Mr. Sharma not only prepares students for exams but also nurtures a genuine interest in science and research."
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>MANISH SINGH</h3>
                                <span>MATHEMATICS</span>
                            </div>
                        </div>
                        <p>
                       "Mr. Manish is a dedicated Mathematics teacher who turns numbers into a language every student can understand. His clear explanations and step-by-step approach make even the toughest problems feel manageable. He focuses on building strong fundamentals while also training students to think logically and solve problems creatively. With his guidance, students not only score well in exams but also develop confidence and a lifelong appreciation for mathematics."
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>ANIKET KUMAR</h3>
                                <span>SCIENCE</span>
                            </div>
                        </div>
                        <p>
                           "Aniket Sir brings science to life in the classroom with his interactive and practical teaching style. He makes complex concepts simple, connects lessons to real-world examples, and sparks curiosity in every student. His passion for the subject inspires learners to explore, question, and truly enjoy the world of science."
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>TUSHAR SHARMA</h3>
                                <span>PHYSICS</span>
                            </div>
                        </div>
                        <p>
                           "Tushar Sharma Sir has a unique way of turning physics into an exciting journey rather than a tough subject. His clear explanations, practical demonstrations, and problem-solving approach help students not only understand the concepts but also build confidence in applying them. He inspires curiosity and a love for learning physics."
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials