import React from 'react';
import "./../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

class ClientAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                prenom: "",
                nom: "",
                adresse: "",
                ville: "",
                code_postal: "",
                pays: "",
                telephone: "",
                email: ""
            },
            checkForm: false
        };
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handlePrenomChange = this.handlePrenomChange.bind(this);
        this.handleAdresseChange = this.handleAdresseChange.bind(this);
        this.handleVilleChange = this.handleVilleChange.bind(this);
        this.handleCodePostalChange = this.handleCodePostalChange.bind(this);
        this.handlePaysChange = this.handlePaysChange.bind(this);
        this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleNomChange(e) {
        this.state.item.nom = e.target.value;
        this.setState(this.state.item);
    }
    handlePrenomChange(e) {
        this.state.item.prenom = e.target.value;
        this.setState(this.state.item);
    }
    handleAdresseChange(e) {
        this.state.item.adresse = e.target.value;
        this.setState(this.state.item);
    }
    handleVilleChange(e) {
        this.state.item.ville = e.target.value;
        this.setState(this.state.item);
    }
    handleCodePostalChange(e) {
        this.state.item.code_postal = e.target.value;
        this.setState(this.state.item);
    }
    handlePaysChange(e) {
        this.state.item.pays = e.target.value;
        this.setState(this.state.item);
    }
    handleTelephoneChange(e) {
        this.state.item.telephone = e.target.value;
        this.setState(this.state.item);
    }
    handleEmailChange(e) {
        this.state.item.email = e.target.value;
        this.setState(this.state.item);
    }


    onSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state.item));

        axios
            .post(
                "https://62065e7a92dd6600171c0a07.mockapi.io/Client",
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
                    <h2>Ajouter un Client</h2>
                </div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    {divAlert}
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom du Client"
                            value={this.state.item.nom}
                            onChange={this.handleNomChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Entrez le prenom du Client"
                            value={this.state.item.prenom}
                            onChange={this.handlePrenomChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="Entrez l'adresse du Client"
                            value={this.state.item.adresse}
                            onChange={this.handleAdresseChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Ville</Form.Label>
                        <Form.Control
                            type="text"
                            id="ville"
                            name="ville"
                            placeholder="Entrez la ville du Client"
                            value={this.state.item.ville}
                            onChange={this.handleVilleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Code postal</Form.Label>
                        <Form.Control
                            type="text"
                            id="code_postal"
                            name="code_postal"
                            placeholder="Entrez le code postal du Client"
                            value={this.state.item.code_postal}
                            onChange={this.handleCodePostalChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Pays</Form.Label>
                        <Form.Control
                            type="text"
                            id="pays"
                            name="pays"
                            placeholder="Entrez le pays du Client"
                            value={this.state.item.pays}
                            onChange={this.handlePaysChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Télephone</Form.Label>
                        <Form.Control
                            type="text"
                            id="telephone"
                            name="telephone"
                            placeholder="Entrez le télephone du Client"
                            value={this.state.item.telephone}
                            onChange={this.handleTelephoneChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Entrez l'email du Client"
                            value={this.state.item.email}
                            onChange={this.handleEmailChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button type='submit' variant='success' onClick={e => e.target.blur()} style={{width:'7rem'}}>Envoyer</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/clients">
                            <Button variant='danger' style={{width:'7rem'}}>Retour</Button>
                        </Link>
                    </Form.Group>

                </Form>
            </div>
        );
    }
}
export default ClientAdd;