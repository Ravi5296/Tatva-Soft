import React from 'react'
import InputRef from './InputRef'

class FocusInput extends React.Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandle = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <InputRef ref={this.componentRef}/>
                <button onClick={this.clickHandle}>click me</button>
            </div>
        )
    }
}

export default FocusInput