import React from "react";
import classes from './accordionItem.module.scss'

const AccordionItem = (props) => {
    return (
     <>
         <div className={classes.filterBlock} >
             <div onClick={() => {
                 props.handleAccordionClick(props.index)

             }}>
                 <div>{props.title}</div>
                 <span className={classes.accordionLogo}>{props.isOpen ? '-' : '+'}</span>

             </div>
         </div>
         {props.isOpen && <div>{props.children}</div> }
     </>

    )
}

export default AccordionItem;