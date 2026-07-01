import React from "react";
import "./About.css";
import aboutImage1 from "../../Assest/about1_img.jpg";
import aboutImage2 from "../../Assest/about2_img.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
      {/* Center Title */}
      <div className="about-header">
        <span className="about-tag">About Us</span>
      </div>

      <div className="about-container">
        {/* Left - Image Side */}
        <div className="about-left">
          <div className="about-image-grid">
            <div className="about-img-box about-img-main">
              <img
                src={aboutImage2}
                alt="Gym Training"
              />
            </div>

            <div className="about-img-box about-img-small">
              <img
                src={aboutImage1}
                alt="Workout"
              />
            </div>

            <div className="about-experience-badge">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Right - Content Side */}
        <div className="about-right">
          <h2>
            We Help You <span>Build</span> The Body
            <br />
            You've Always <span>Wanted</span>
          </h2>

          <p className="about-desc">
            At our gym, we believe fitness is more than just lifting weights —
            it's a lifestyle. With over 10 years of experience, we've helped
            thousands of people transform their bodies and minds through
            personalized training programs and expert guidance.
          </p>

          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">💪</div>
              <div>
                <h4>Expert Trainers</h4>
                <p>Certified professionals to guide your every rep and set.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">🏋️</div>
              <div>
                <h4>Modern Equipment</h4>
                <p>State-of-the-art machines for every muscle group.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">🥗</div>
              <div>
                <h4>Nutrition Plans</h4>
                <p>Custom diet plans to fuel your fitness journey.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">⏰</div>
              <div>
                <h4>24/7 Access</h4>
                <p>Train anytime — morning, evening, or midnight.</p>
              </div>
            </div>
          </div>

          {/* <button className="about-btn">Learn More About Us</button> */}
        </div>
      </div>
    </section>
  );
};



// import React from "react";
// import "./About.css";

// export const About = () => {
//   return (
//     <section className="about" id="about">
//       <div className="about-header">
//         <span className="about-tag">About Us</span>
//         <h2>
//           We Help You <span>Build</span> The Body
//           <br />
//           You've Always <span>Wanted</span>
//         </h2>
//       </div>

//       <div className="about-container">
//         {/* Left - Image Side */}
//         <div className="about-left">
//           <div className="about-image-grid">
//             <div className="about-img-box about-img-main">
//               <img
//                 src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
//                 alt="Gym Training"
//               />
//             </div>

//             <div className="about-img-box about-img-small">
//               <img
//                 src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
//                 alt="Workout"
//               />
//             </div>

//             <div className="about-experience-badge">
//               <h3>10+</h3>
//               <p>Years of Excellence</p>
//             </div>
//           </div>
//         </div>

//         {/* Right - Content Side */}
//         <div className="about-right">
//           <p className="about-desc">
//             At our gym, we believe fitness is more than just lifting weights —
//             it's a lifestyle. With over 10 years of experience, we've helped
//             thousands of people transform their bodies and minds through
//             personalized training programs and expert guidance.
//           </p>

//           <div className="about-features">
//             <div className="about-feature-card">
//               <div className="about-feature-icon">💪</div>
//               <div>
//                 <h4>Expert Trainers</h4>
//                 <p>Certified professionals to guide your every rep and set.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">🏋️</div>
//               <div>
//                 <h4>Modern Equipment</h4>
//                 <p>State-of-the-art machines for every muscle group.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">🥗</div>
//               <div>
//                 <h4>Nutrition Plans</h4>
//                 <p>Custom diet plans to fuel your fitness journey.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">⏰</div>
//               <div>
//                 <h4>24/7 Access</h4>
//                 <p>Train anytime — morning, evening, or midnight.</p>
//               </div>
//             </div>
//           </div>

//           <button className="about-btn">Learn More About Us</button>
//         </div>
//       </div>
//     </section>
//   );
// };















// import React from 'react'
// import './About.css'

// export const About = () => {
//   return (
//     <div>
//           <section className="about" id="about">
//       <div className="about-container">
//         {/* Left - Image Side */}
//         <div className="about-left">
//           <div className="about-image-grid">
//             <div className="about-img-box about-img-main">
//               <img
//                 src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
//                 alt="Gym Training"
//               />
//             </div>

//             <div className="about-img-box about-img-small">
//               <img
//                 src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
//                 alt="Workout"
//               />
//             </div>

//             {/* Experience Badge */}
//             <div className="about-experience-badge">
//               <h3>10+</h3>
//               <p>Years of Excellence</p>
//             </div>
//           </div>
//         </div>

//         {/* Right - Content Side */}
//         <div className="about-right">
//           <span className="about-tag">About Us</span>

//           <h2>
//             We Help You <span>Build</span> The Body
//             <br />
//             You've Always <span>Wanted</span>
//           </h2>

//           <p className="about-desc">
//             At our gym, we believe fitness is more than just lifting weights —
//             it's a lifestyle. With over 10 years of experience, we've helped
//             thousands of people transform their bodies and minds through
//             personalized training programs and expert guidance.
//           </p>

//           {/* Feature Cards */}
//           <div className="about-features">
//             <div className="about-feature-card">
//               <div className="about-feature-icon">💪</div>
//               <div>
//                 <h4>Expert Trainers</h4>
//                 <p>Certified professionals to guide your every rep and set.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">🏋️</div>
//               <div>
//                 <h4>Modern Equipment</h4>
//                 <p>State-of-the-art machines for every muscle group.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">🥗</div>
//               <div>
//                 <h4>Nutrition Plans</h4>
//                 <p>Custom diet plans to fuel your fitness journey.</p>
//               </div>
//             </div>

//             <div className="about-feature-card">
//               <div className="about-feature-icon">⏰</div>
//               <div>
//                 <h4>24/7 Access</h4>
//                 <p>Train anytime — morning, evening, or midnight.</p>
//               </div>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="about-btn">Learn More About Us</button>
//         </div>
//       </div>
//     </section>
 

//     </div>
//   )
// }


