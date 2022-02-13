import React from 'react';
import "./../App.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Hotel extends React.Component {

    onDelete(id) {
        axios.delete(`https://62065e7a92dd6600171c0a07.mockapi.io/Hotel/${id}`)
            .then(() => {
                console.log("TODO: data a refresh")
            })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '20rem', height: '22rem' }}>
                    <Card.Header style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Le {this.props.hotel.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>Adresse : {this.props.hotel.adresse}</Card.Text>
                        <Card.Text>Télephone : {this.props.hotel.telephone}</Card.Text>
                        <Card.Text>Code de l'hôtel : {this.props.hotel.code}</Card.Text>
                        <Card.Title>🚗🏖️🌇</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                            <Row>
                                <Col>
                                    <Link to={"/modifierHotel/" + this.props.hotel.id} >
                                        <Button variant="primary" style={{ width: '7rem' }}>Modifier</Button>
                                    </Link>
                                </Col>
                                <Col><Button variant="danger" style={{ width: '7rem' }} onClick={this.onDelete(this.props.hotel.id)}>Supprimer</Button></Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
export default Hotel;