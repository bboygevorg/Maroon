import React, {useState} from "react";
import classes from './mobileFilterAccordion.module.scss';
import AccordionItem from "./accordionItem/accordeonItem";

const MobileFilterAccordion = () => {
    const [mobileAccordion, setMobileAccordion] = useState([
        {
            isOpen: false,
            title: 'Уход для лица',
            children:
                    <form action="#" className={classes.filterItem}>
                        <label>
                            <input type="checkbox" name="face1" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Крема</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face2" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Сыворотки</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face3" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Маски</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face4" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Пенки</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face5" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Тоники</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face6" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Пудры</span>
                        </label>
                    </form>
        },
        {
            isOpen: false,
            title: 'Уход для тела',
            children:
                <form action="#" className={classes.filterItem}>
                    <label>
                        <input type="checkbox" name="body1" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Крема</span>
                    </label>
                    <label>
                        <input type="checkbox" name="body2" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Масла</span>
                    </label>
                    <label>
                        <input type="checkbox" name="body3" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Скрабы</span>
                    </label>
                    <label>
                        <input type="checkbox" name="body4" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Мыло</span>
                    </label>
                    <label>
                        <input type="checkbox" name="body5" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Бомбочки для ванны</span>
                    </label>
                    <label>
                        <input type="checkbox" name="body6" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Соль для ванны</span>
                    </label>
                </form>
        },
        {
            isOpen: false,
            title: 'Тип кожы',
            children:
                <form action="#" className={classes.filterItem}>
                    <label>
                        <input type="checkbox" name="leather1" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Нормальная</span>
                    </label>
                    <label>
                        <input type="checkbox" name="leather2" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Сухая</span>
                    </label>
                    <label>
                        <input type="checkbox" name="leather3" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Жирная</span>
                    </label>
                    <label>
                        <input type="checkbox" name="leather4" className={classes.checkBox} />
                        <span className={classes.fakeBox}></span>
                        <span className={classes.filterCheckBoxLabel}>Комбинированная</span>
                    </label>
                </form>
        }

    ])

    const handleAccordionClick = (index) => {
        let newAccordion = [...mobileAccordion];
        newAccordion[index].isOpen = !newAccordion[index].isOpen;

        setMobileAccordion(newAccordion)
    }

    return (
       <div className={classes.filterPosition}>
           {mobileAccordion.map((item, index) => {
               return (
                   <div className={classes.transition} key={index}>
                       <AccordionItem index={index} isOpen={item.isOpen} children={item.children} handleAccordionClick={handleAccordionClick} title={item.title} />

                   </div>
               )
           })}
       </div>
    )
}

export default MobileFilterAccordion;