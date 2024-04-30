import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Conatcts</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            We always ready to help by providng the best services beleive a good
            place to live can make your life better.{" "}
          </span>
          <div className="flexColStart contactModes">
            {/* firstrow */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">832 938 098 </span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              
              {/* second */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">832 938 098 </span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

            </div>

         {/* third */}
         <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> VideoCall</span>
                    <span className="secondaryText">832 938 098 </span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              
              {/* fourth */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">832 938 098 </span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>

            </div>



            </div>
            </div>
             


             
            



          

        {/* rightside */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
