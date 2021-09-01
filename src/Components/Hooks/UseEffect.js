import React from 'react'
import './style.css'

const UseEffect = () => {
    const [myNumber, setMyNumber] = React.useState(0)

    React.useEffect(() => {
        document.title = `UseEffect(${myNumber})`
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
        </div>
    )
}

export default UseEffect
