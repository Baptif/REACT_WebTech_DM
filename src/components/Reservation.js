import React from 'react';
import "./../App.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Reservation extends React.Component {

    onDelete(id) {
        axios.delete(`https://62065e7a92dd6600171c0a07.mockapi.io/Hotel/${id}`)
            .then(() => {
                console.log("TODO: data a refresh")
            })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '20rem', height: '25rem' }}>
                    <Card.Header style={{textDecoration:'underline', fontWeight:'bold'}}>Numéro : {this.props.reservation.numero}</Card.Header>
                    <Card.Body>
                        <Card.Text>Date de réservation : {this.props.reservation.date_reservation}</Card.Text>
                        <Card.Text>Date de début du séjour : {this.props.reservation.date_debut}</Card.Text>
                        <Card.Text>Date de fin du séjour : {this.props.reservation.date_fin}</Card.Text>
                        <Card.Text>Prix : {this.props.reservation.montant}€</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                        <Row>
                                <Col>
                                    <Link to={"/modifierReservation/" + this.props.reservation.id} >
                                        <Button variant="primary" style={{ width: '7rem' }}>Modifier</Button>
                                    </Link>
                                </Col>
                                <Col><Button variant="danger" style={{ width: '7rem' }} onClick={this.onDelete(this.props.reservation.id)}>Supprimer</Button></Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
export default Reservation;