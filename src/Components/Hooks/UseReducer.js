import React from 'react'
import './style.css'

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state += 1
    }
    else if (state>0 && action.type === "DECR") {
        state -= 1
    }
    return state
}

const UseReducer = () => {
    const [state, dispatch] = React.useReducer(reducer, 0)

    React.useEffect(() => {
        document.title = `Hooks(${state})`
    })

    return (
        <div className="center_div">
            <p>{ state }</p>
            <div className="button2" onClick={ ()=>{dispatch({type:"INCR"})} }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={ ()=>{dispatch({type:"DECR"})} }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
    )
}

export default UseReducer
