import React from 'react';
import "./../App.css";
import axios from 'axios';
import Client from './Client';

class ClientsVue extends React.Component {
   constructor(props) {
      super(props);
      this.state = { items: [] };
   }

   componentDidMount() {
      axios
         .get(`https://62065e7a92dd6600171c0a07.mockapi.io/Client`)
         .then((response) => {
            this.setState({ items: response.data });
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   render() {
      this.list = (this.state.items.length === 0 ? <h2>❌La liste est vide !❌</h2> : this.state.items.map((item) => (
         <Client key={item.id} client={item} />
      )));
      return (
         <div className="center_body">
            <h1>📃 Liste des Clients 📃</h1>
            <div className='list_container'>{this.list}</div>
         </div>
      );
   }
}
export default ClientsVue;