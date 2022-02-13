import React from 'react';
import "./../App.css";
import axios from 'axios';
import Chambre from './Chambre';

class ChambresVue extends React.Component {
   constructor(props) {
      super(props);
      this.state = { items: [] };
   }

   componentDidMount() {
      axios
         .get(`https://62065e7a92dd6600171c0a07.mockapi.io/Chambre`)
         .then((response) => {
            this.setState({ items: response.data });
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   render() {
      this.list = (this.state.items.length === 0 ? <h2>❌La liste est vide !❌</h2> : this.state.items.map((item) => (
         <Chambre key={item.id} chambre={item} />
      )));
      return (
         <div className="center_body">
            <h1>📃 Liste des Chambres 📃</h1>
            <div className='list_container'>{this.list}</div>
         </div>
      );
   }
}
export default ChambresVue;