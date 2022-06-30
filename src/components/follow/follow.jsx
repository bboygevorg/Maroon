import React, {Component} from "react";
import classes from './follow.module.scss'
import {followImage} from "../../containers/static/static";
import FollowImage from "./followImage/followImage";

const Follow = () => {
    return (
        <>
          <section className={`${classes.mainBlock} ${classes.follow}`}>
              <div className={classes.followContainer}>
                  <div className={classes.followImageWrapper}>
                      {followImage.map((item, index) => {
                          return <FollowImage {...item} key={index}/>
                      })}
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
