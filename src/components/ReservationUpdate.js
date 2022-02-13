import React from 'react';
import "./../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

class ReservationUpdate extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            item: {
                id:"",
                numero: "",
                date_reservation: "",
                date_debut: "",
                date_fin: "",
                montant: 0.0
            },
            checkForm: false
        };
        this.handleNumeroChange = this.handleNumeroChange.bind(this);
        this.handleDateResaChange = this.handleDateResaChange.bind(this);
        this.handleDateDebChange = this.handleDateDebChange.bind(this);
        this.handleDateFinChange = this.handleDateFinChange.bind(this);
        this.handleMontantChange = this.handleMontantChange.bind(this);
    }

    componentDidMount() {
        let thePath = window.location.href;
        const hotelID = thePath.substr(thePath.lastIndexOf('/') + 1);
        this.state.item.id = hotelID;

        axios
            .get(
                "https://61e7cff2e32cd90017acbdad.mockapi.io/Reservation/" +
                hotelID
            )
            .then((response) => {
                this.setState({ item: response.data });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleNumeroChange(e) {
        this.state.item.numero = e.target.value;
        this.setState(this.state.item);
    }
    handleDateResaChange(e) {
        this.state.item.date_reservation = e.target.value;
        this.setState(this.state.item);
    }
    handleDateDebChange(e) {
        this.state.item.date_debut = e.target.value;
        this.setState(this.state.item);
    }
    handleDateFinChange(e) {
        this.state.item.date_fin = e.target.value;
        this.setState(this.state.item);
    }
    handleMontantChange(e) {
        this.state.item.montant = e.target.value;
        this.setState(this.state.item);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state.item));

        axios
            .put(
                "https://62065e7a92dd6600171c0a07.mockapi.io/Reservation/" +
                this.state.item.id,
                this.state.item
            )
            .then((response) => {
                console.log(response);
                // this.setState({ items: response.data });
                if (response.status === 200) {
                    this.state.item.checkForm = true;
                    this.setState(this.state);
                }

                console.log(this.state.checkForm);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let divAlert = "";

        if (this.state.checkForm) {
            divAlert = (
                <div className="alert alert-success" role="alert">
                    L'enregistrement a été éffectué avec succés.
                </div>
            );
        }

        return (
            <div className="center_body">
                <div>
                    <h2>Modifier une Réservation</h2>
                </div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    {divAlert}
                    <Form.Group className="mb-3">
                        <Form.Label>Numéro</Form.Label>
                        <Form.Control
                            type="number"
                            id="numero"
                            name="numero"
                            placeholder="Entrez le numero de la réservation"
                            value={this.state.item.numero}
                            onChange={this.handleNumeroChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date de réservation</Form.Label>
                        <Form.Control
                            type="date"
                            id="date_reservation"
                            name="date_reservation"
                            placeholder="Entrez la date de réservation"
                            value={this.state.item.date_reservation}
                            onChange={this.handleDateResaChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date de début</Form.Label>
                        <Form.Control
                            type="date"
                            id="date_debut"
                            name="date_debut"
                            placeholder="Entrez la date de début de séjour"
                            value={this.state.item.date_debut}
                            onChange={this.handleDateDebChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date de fin</Form.Label>
                        <Form.Control
                            type="date"
                            id="date_fin"
                            name="date_fin"
                            placeholder="Entrez la date de fin de séjour"
                            value={this.state.item.date_fin}
                            onChange={this.handleDateFinChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Montant</Form.Label>
                        <Form.Control
                            type="number"
                            id="montant"
                            name="montant"
                            placeholder="Entrez le montant de la réservation"
                            value={this.state.item.montant}
                            onChange={this.handleMontantChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button type='submit' variant='success' onClick={e => e.target.blur()} style={{ width: '7rem' }}>Envoyer</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/reservations">
                            <Button variant='danger' style={{ width: '7rem' }}>Retour</Button>
                        </Link>
                    </Form.Group>

                </Form>
            </div>
        );
    }
}
export default ReservationUpdate;