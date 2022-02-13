import React from 'react';
import "./../App.css";

class Accueil extends React.Component {

   render() {

      return (
         <div className="center_body">
            <h1>Bienvenue sur votre gestion hôtelière.</h1>
            <div>
               <p><strong>Ici vous pourrez gérer vos Hotels, avec vos chambres, vos clients et vos réservations ! <br></br>
                  Utilisez le menu pour accéder aux ressources dont vous avez besoin.</strong><br></br>
                  Ut tristique mi metus, sit amet condimentum lectus bibendum id. Cras ut mattis sapien, sed dignissim velit. <br></br>
                  Quisque at ligula at lorem auctor rutrum. Praesent viverra urna euismod est gravida, sit amet ornare ligula volutpat. <br></br>
                  Sed nulla erat, dignissim vehicula tristique vitae, finibus eu elit. Donec lacinia lorem non fermentum tristique.</p>
            </div>
         </div >
      );
   }
}
export default Accueil;