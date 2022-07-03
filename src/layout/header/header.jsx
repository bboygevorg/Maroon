import '../../assets/styles/styles.scss'
import classes from './header.module.scss'
import Navbar from "../../components/navbar/navbar";
import logo from "../../assets/svg/sprite/logo-icon.svg"
import login from "../../assets/svg/sprite/user-icon.svg"
import basket from "../../assets/svg/sprite/cart-icon.svg"
import {useState} from "react";
import {useParams} from "react-router-dom";

const Header = () => {
   const [isActiveNavbar, setIsActiveNavbar] = useState(false);
   const [headerScroll, setHeaderScroll] = useState(false);
    let { type } = useParams();

    // const activeCLick = () => {
    //
    // }

    const changeBackground = () => {

       if (window.scrollY >= 1) {
           setHeaderScroll(true)
       } else {
           setHeaderScroll(false)
       }
   }

   window.addEventListener('scroll', changeBackground);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerColored : classes.headerTransparent} ` }>
            <button className={classes.burgerMenu} onClick={() => `${setIsActiveNavbar(!isActiveNavbar)} ${classes.change}`}>
                <div className={classes.burger1}></div>
                <div className={classes.burger2}></div>
                <div className={classes.burger3}></div>
            </button>
            <a href="/maroon" className={classes.logo}>
                <img src={logo} alt="maroon"/>
            </a>
            <div className={classes.navigate}>
                <div className={classes.navigationList}>
                    <Navbar className={isActiveNavbar ? classes.isActiveNavbar : ''}/>
                </div>
                <div className={classes.navigationData}>
                    <div className={classes.paddingRight}>
                        <a href="/">
                            <img className={classes.changeMyColor} src={login} alt="login"/>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src={basket} alt="basket"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Header}