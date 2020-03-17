import React from 'react'

import { Container, Table } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class FoodsIndex extends React.Component {

    constructor() {
        super()
        this.state = {
            foods: undefined
        }
    }

        componentDidMount() {
            fetch('http://react-webinar.herokuapp.com/')
            .then(response => response.json())
            .then(foodsArray => this.setState({
                foods: foodsArray
            }))
    }

    render() {
        return(
            <Container>

                <h1>Listado de alimentos</h1>
                
                {this.state.foods ?

                <Table>
                    <tbody>
                        {this.state.foods.map((food, i) =>
                            <tr key={i}>
                                <td> <img src={`/img/${food.img}`} alt={food.name} /> </td>
                                <td> <p>{food.name}</p> </td>
                                <td> <p><small>Precio: {food.price}€ | Stock: {food.stock} uds. |  Kcal: {food.kcal}/100g</small></p> </td>
                                <td><Link className="btn btn-sm btn-outline" to={`/detalles/${food._id}`}> Detalles</Link></td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                :

                <p>Cargando....</p>
            }
            </Container>
        )
    }
}

export default FoodsIndex