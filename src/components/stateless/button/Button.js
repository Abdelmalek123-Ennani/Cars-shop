import React , {useRef} from 'react'

function Button({children , type , typeBtn = "btn-success" , click , removeItemFromCart}) {
    /**
     * we use the click props to send methodes to the Button
     * because we have multiple methodes so we send them using the same name (click)
     * that's will help us to use onclick for multiple times and also for multiple components
     */

    const ref = useRef()
    return (
        <>
             <button
                    type={type} 
                    className={`button-53 ${typeBtn}`}
                    onClick={click}
            >{children}</button>
        </>
    )
}

export default Button
