import React from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(
        Menu.map((curEle) => {
            return curEle.category
        })
    ), "all"
]

const Resturant = () => {
    const [MenuData, SetMenuData] = React.useState(Menu)
    const [MenuList, SetMenuList] = React.useState(uniqueList)

    const filterItem = (category) => {
        const updatedList = Menu.filter((curEle) => {
            if (category === "all") {
                return curEle
            } else {
                return curEle.category === category;
            }
        })
        SetMenuData(updatedList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} MenuList={ MenuList }/>
            <MenuCard MenuData={ MenuData }/>
        </>
    )
}

export default Resturant
