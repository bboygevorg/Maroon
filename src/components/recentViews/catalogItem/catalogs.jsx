import React from "react";
import classes from './catalogs.module.scss'
import {recentView} from "../../../containers/static/static";
import RecentViewItem from "../components/catalogItem";


const RecentViewList = () => {
    return (
        <>
            {recentView.map((item, index) => {
                return <RecentViewItem {...item} key={index} />
            })}
        </>
    )
}

export default RecentViewList;