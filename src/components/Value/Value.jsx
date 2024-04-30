import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
            <span className="orangeText"> Our Value</span>
                <span className="primaryText">Value We Give to You</span>
                <span className="secondaryText">
                    We are always ready to help you providing the best services.
                    <br/>
                    We beleive a good place to live and make your life better.
                </span>
                <Accordion className="accordian" allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                      data.map((item,i)=>{
                        const[className,setClassname]=useState(null)
                        return(
                           <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                                     <AccordionItemHeading>
                                        <AccordionItemButton className=" flexCenter accordionButton">
                                            <AccordionItemState>
                                            {({expanded})=>
                                            expanded
                                            ? setClassname("expanded")
                                            :setClassname("collapsed")
                                          }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                     </AccordionItemHeading>
                                     <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                     </AccordionItemPanel>
                           </AccordionItem>
                        );
                      })
                    }

                </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
