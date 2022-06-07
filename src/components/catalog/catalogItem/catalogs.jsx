import React from "react";
import classes from './catalogs.module.scss'
import CatalogItem from "../components/catalogItem";
import {Catalog} from "../../../containers/static/static";


const CatalogList = () => {
    return (
        <>
            {Catalog.map((item, index) => {
                return <CatalogItem {...item} key={index} />
            })}
        </>
    )
}

export default CatalogList;