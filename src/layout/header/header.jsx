import '../../assets/styles/styles.scss'
import classes from './header.module.scss'
import Navbar from "../../components/navbar/navbar";
import logo from "../../assets/svg/sprite/logo-icon.svg"
import login from "../../assets/svg/sprite/user-icon.svg"
import basket from "../../assets/svg/sprite/cart-icon.svg"
import {useState} from "react";



const Header = () => {
   const [isActiveNavbar, setIsActiveNavbar] = useState(false);
   const [headerScroll, setHeaderScroll] = useState(false);

   const changeBackground = () => {
       console.log(window.scrollY)

       if (window.scrollY >= 1) {
           setHeaderScroll(true)
       } else {
           setHeaderScroll(false)
       }
   }

   window.addEventListener('scroll', changeBackground);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerColored : classes.headerTransparent}` }>
            <button className={classes.burger_menu} onClick={() => {setIsActiveNavbar(!isActiveNavbar)}}/>
            <a href="/" className={classes.logo}>
                <img src={logo} alt="maroon"/>
            </a>
            <div className={classes.navigate}>
                <div className={classes.navigation_list}>
                    <Navbar className={isActiveNavbar ? classes.isActiveNavbar : ''}/>
                </div>
                <div className={classes.navigation_data}>
                    <div className={classes.padding_right}>
                        <a href="/">
                            <img className={classes.change_my_color} src={login} alt="login"/>
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