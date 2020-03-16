import React from 'react'

import foodsArray from '../../../foods-info'

import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap'

class FoodDetails extends React.Component {

    constructor(){
        super()
        this.state = {
            food: foodsArray[0]
        }
    }

    render(){

        

        return (<Container>
                    <Row>
                        <Col md={4}>
                            <h1>{this.state.food.name}</h1>
                            <img className="food-detail-img" src={`/img/${this.state.food.img}`} />
                        </Col>
                        >
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
                                    {this.state.food.origin.map(country => <li>{country}</li>)}
                                   
                                </ul>
                            </Tab>
                            <Tab eventkey="Stock" title="Stock">
                                <h3>Información Nutricional</h3>
                                <hr/>
                                <p>Stock actual: {this.state.food.stock} unidades en stock.</p>
                             
                            </Tab>
                        </Tabs>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default FoodDetails