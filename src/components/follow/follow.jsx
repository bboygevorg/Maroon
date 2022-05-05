import React, {Component} from "react";
import classes from './follow.module.scss'
import followImageOne from '../../assets/img/join1@1x.jpg'
import followImageTwo from '../../assets/img/join2@1x.jpg'
import followImageTree from '../../assets/img/join3@1x.jpg'
import followImageFour from '../../assets/img/join4@1x.jpg'
import followImageFive from '../../assets/img/join5@1x.jpg'
import followImageSix from '../../assets/img/join6@1x.jpg'

const Follow = () => {
    return (
        <>
          <section className={`${classes.mainBlock} ${classes.follow}`}>
              <div className={classes.followContainer}>
                  <div className={classes.followImageWrapper}>
                      <div>
                          <img className={classes.followImage} src={followImageOne} alt=""Присоединяйтесь к нам/>
                      </div>
                      <div>
                          <img className={classes.followImage} src={followImageTwo} alt=""Присоединяйтесь к нам/>
                      </div>
                      <div>
                          <img className={classes.followImage} src={followImageTree} alt="Присоединяйтесь к нам"/>
                      </div>
                      <div>
                          <img className={classes.followImage} src={followImageFour} alt="Присоединяйтесь к нам"/>
                      </div>
                      <div>
                          <img className={classes.followImage} src={followImageFive} alt="Присоединяйтесь к нам"/>
                      </div>
                      <div>
                          <img className={classes.followImage} src={followImageSix} alt="Присоединяйтесь к нам"/>
                      </div>
                  </div>
                  <div className={classes.followContent}>
                      <h2 className={classes.followTitle}>Присоединяйтесь к нам</h2>
                      <p className={classes.followText}>Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
                      <a className={`${classes.followLink} ${classes.button}`} href="#" aria-label="Подписаться">Подписатся</a>
                  </div>
              </div>
          </section>
        </>
    )
}

export {Follow}
