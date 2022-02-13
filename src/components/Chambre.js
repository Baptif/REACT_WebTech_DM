import React from 'react';
import "./../App.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Chambre extends React.Component {

    onDelete(id) {
        axios.delete(`https://62065e7a92dd6600171c0a07.mockapi.io/Chambre/${id}`)
            .then(() => {
                console.log("TODO: data a refresh")
            })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '20rem', height: '18rem' }}>
                    <Card.Header style={{textDecoration:'underline', fontWeight:'bold'}}>Chambre n°{this.props.chambre.numero}</Card.Header>
                    <Card.Body>
                        <Card.Text>Télephone : {this.props.chambre.telephone}</Card.Text>
                        <Card.Title>🛏️🛏️🚿🚽♨️🌳</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                        <Row>
                                <Col>
                                    <Link to={"/modifierChambre/" + this.props.chambre.id} >
                                        <Button variant="primary" style={{ width: '7rem' }}>Modifier</Button>
                                    </Link>
                                </Col>
                                <Col><Button variant="danger" style={{ width: '7rem' }} onClick={this.onDelete(this.props.chambre.id)}>Supprimer</Button></Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
export default Chambre;