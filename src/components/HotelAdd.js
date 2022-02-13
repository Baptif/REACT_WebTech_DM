import React from 'react';
import "./../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

class HotelAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                nom: "",
                adresse: "",
                telephone: "",
                code: 0
            },
            checkForm: false
        };
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleAdresseChange = this.handleAdresseChange.bind(this);
        this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    handleNomChange(e) {
        this.state.item.nom = e.target.value;
        this.setState(this.state.item);
    }
    handleAdresseChange(e) {
        this.state.item.adresse = e.target.value;
        this.setState(this.state.item);
    }
    handleTelephoneChange(e) {
        this.state.item.telephone = e.target.value;
        this.setState(this.state.item);
    }
    handleCodeChange(e) {
        this.state.item.code = e.target.value;
        this.setState(this.state.item);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state.item));

        axios
            .post(
                "https://62065e7a92dd6600171c0a07.mockapi.io/Hotel",
                this.state.item
            )
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    this.state.item.checkForm = true;
                    this.setState(this.state);
                }

                console.log(this.state.checkForm);
                // this.setState({ items: response.data });
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
                    <h2>Ajouter un Hôtel</h2>
                </div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    {divAlert}
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom de l'Hôtel"
                            value={this.state.item.nom}
                            onChange={this.handleNomChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="Entrez l'adresse de l'Hôtel"
                            value={this.state.item.adresse}
                            onChange={this.handleAdresseChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Télephone</Form.Label>
                        <Form.Control
                            type="text"
                            id="telephone"
                            name="telephone"
                            placeholder="Entrez le télephone de l'Hôtel"
                            value={this.state.item.telephone}
                            onChange={this.handleTelephoneChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                            type="number"
                            id="code"
                            name="code"
                            value={this.state.item.code}
                            onChange={this.handleCodeChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button type='submit' variant='success' onClick={e => e.target.blur()} style={{width:'7rem'}}>Envoyer</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/hotels">
                            <Button variant='danger' style={{width:'7rem'}}>Retour</Button>
                        </Link>
                    </Form.Group>

                </Form>
            </div>
        );
    }
}
export default HotelAdd;