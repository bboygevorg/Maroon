import React, {Component} from "react";
import {useParams} from "react-router-dom";
import {Header} from "./header/header";
import Footer from "./footer/footer";
import {Follow} from "../components/follow/follow";

// const users = [
//     {
//         name: 'Artak',
//         age: 29,
//         image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//     },
//     {
//         name: 'Anna',
//         age: 30,
//         image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//     },
//     {
//         name: 'Mher',
//         age: 45,
//         image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//     }
// ]

const MainLayout = ({children}) => {
    // let { id } = useParams();
    // let newGetComponent = {
    //     card: <div>Gago</div>,
    //     name: 'Ashxen',
    // }

    return (
        <>
            <Header />
            {children}
            {/*{users[id].name}*/}
            {/*{users[id].age}*/}
            {/*{users[id].image}*/}
            <Follow />
            <Footer />
        </>
    )
}

export default MainLayout