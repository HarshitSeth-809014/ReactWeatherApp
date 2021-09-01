import React from 'react'

const Navbar = ({filterItem, MenuList}) => {
    
    return (
        <> 
           <nav className="navbar">
                <div className="btn-group">

                    {MenuList.map((curEle) => {
                        return (
                            <button className="btn-group__item" onClick={ ()=>filterItem(curEle) }>{curEle}</button>
                        )
                    })}
                </div>
            </nav> 
        </>
    )
}

export default Navbar
