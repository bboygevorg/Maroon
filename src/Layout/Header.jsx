import '../styles/styles.scss'
import classes from '../styles/header.module.scss'
import Navbar from "../Components/Navbar/Navbar";



const Header = () => {
    return (
        <header className={`${classes.header} ${classes.header_transparent}`}>
            <div className={classes.header_content}>
                <a href="/">Maroon</a>
                <div className={classes.navigate}>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export {Header}