import React from 'react';
import "./../App.css";
import axios from 'axios';
import Hotel from './Hotel';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

class HotelsVue extends React.Component {
   constructor(props) {
      super(props);
      this.state = { items: [] };
   }

   componentDidMount() {
      axios
         .get(`https://62065e7a92dd6600171c0a07.mockapi.io/Hotel`)
         .then((response) => {
            this.setState({ items: response.data });
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   render() {
      this.list = (this.state.items.length === 0 ? <h2>❌La liste est vide !❌</h2> : this.state.items.map((item) => (
         <Hotel key={item.id} hotel={item} />
      )));
      return (
         <div className="center_body">
            <h1>📃 Liste des Hôtels 📃</h1>
            <div>
               <h2>Ajouter un Hôtel</h2>
               <Link  to="/ajouterHotel" >
                  <Button variant="primary" style={{width:'7rem'}}>Ajouter</Button>
               </Link >
            </div>
            <br></br>
            <div className='list_container'>{this.list}</div>
         </div>
      );
   }
}
export default HotelsVue;