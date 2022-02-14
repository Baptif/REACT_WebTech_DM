import React from 'react';
import "./../App.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Client extends React.Component {

    onDelete(id) {
        axios.delete(`https://62065e7a92dd6600171c0a07.mockapi.io/Client/${id}`)
            .then(() => {
                console.log("TODO: data a refresh")
            })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '20rem', height: '25rem' }}>
                    <Card.Header style={{textDecoration:'underline', fontWeight:'bold'}}>{this.props.client.prenom} {this.props.client.nom}</Card.Header>
                    <Card.Body>
                        <Card.Text>Adresse : {this.props.client.adresse}</Card.Text>
                        <Card.Text>Ville : {this.props.client.ville}</Card.Text>
                        <Card.Text>Code postal : {this.props.client.code_postal}</Card.Text>
                        <Card.Text>Pays : {this.props.client.pays}</Card.Text>
                        <Card.Text>Télephone : {this.props.client.telephone}</Card.Text>
                        <Card.Text>Mail : {this.props.client.email}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                        <Row>
                                <Col>
                                    <Link to={"/modifierClient/" + this.props.client.id} >
                                        <Button variant="primary" style={{ width: '7rem' }}>Modifier</Button>
                                    </Link>
                                </Col>
                                <Col><Button variant="danger" style={{ width: '7rem' }} onClick={this.onDelete(this.props.client.id)}>Supprimer</Button></Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
export default Client;