import React from 'react'
import './style.css'

const UseState = () => {
    const [myNumber, setMyNumber] = React.useState(0)

    React.useEffect(() => {
        document.title = `Hooks(${myNumber})`
    })

    return (
        <div className="center_div">
            <p>{ myNumber }</p>
            <div className="button2" onClick={ ()=>setMyNumber(myNumber+1) }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={ ()=> myNumber>0 ? setMyNumber(myNumber-1) : setMyNumber(0)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
    )
}

export default UseState
