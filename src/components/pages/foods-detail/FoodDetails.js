import React from 'react'

import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap'

// import Link from 'react-router-dom'

class FoodDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            food: undefined
        }
    }

    componentDidMount() {

        const id = this.props.match.params.foodId

        fetch(`http://react-webinar.herokuapp.com/${id}`)
            .then(response => response.json())
            .then(foodDetails => this.setState({
                foods: foodDetails
            }))
        console.log(this.state.food)
    }

    render(){
        console.log(this.state.food)
        return (
                <Container>


                    {
                    
                    this.state.food  ?

                    
                    <Row>
                        <Col md={4}>
                            <h1>{this.state.food.name}</h1>
                            {/* <img className="food-detail-img" src={`/img/${this.state.food.img}`} /> */}
                        </Col>
                        <Col md={8}>
                            <h2>Especificaciones</h2>
                            <p>{this.state.food}</p>
                            <hr />
                            <p>Precio: {this.state.food.price}€</p>

                        <Tabs defaultActiveKey="Nutricional">
                            <Tab eventkey="Nutricional" title="Nutricional">
                                <h3>Información Nutricional</h3>
                                <hr/>
                                <p>Información nutricional por 100g:</p>
                                <ul>
                                    <li>Calorias: {this.state.food.kcal}</li>
                                    <li>Calorias: {this.state.food.protein}</li>
                                    <li>Calorias: {this.state.food.fat}</li>
                                    <li>Calorias: {this.state.food.carbs}</li>
                                </ul>
                            </Tab>
                            <Tab eventkey="Origen" title="Origen">
                                <h3>Origen</h3>
                                <hr/>
                                <p>{this.state.food.name} procedente de:</p>
                                <ul>
                                    {this.state.food.origin.map(country => <li key={country}>{country}</li>)}  
                                </ul>
                            </Tab>
                            <Tab eventkey="Stock" title="Stock">
                                <h3>Información Nutricional</h3>
                                <hr/>
                                <p>Stock actual: {this.state.food.stock} unidades en stock.</p>
                             
                            </Tab>
                        </Tabs>
                        {/* <Link className="bt btn-sm btn-outline-dark" to="/">Volver</Link> */}
                        </Col>
                    </Row>

                    :

                    <p>Cargando...</p>
     
                    }
                </Container>
        )
    }
}

export default FoodDetails