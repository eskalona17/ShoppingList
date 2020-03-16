import React from 'react'

import foodsArray from '../../../foods-info'

class FoodsIndex extends React.Component {

    constructor() {
        super()
        this.state = {
            foods: foodsArray
        }
    }
    render(){
        return(this.state.foods.map(food => <p>{food.name}</p>))
    }
}

export default FoodsIndex