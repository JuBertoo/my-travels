import React from "react";
import Travel from "./Travel"
// src/Travels.js
const travels = [
  {
    destination: "Albuquerque",
    country: "Nouveau Mexique",
    distance: "22 000 km" ,
    photo:
      "http://www.octanefix.com/wp-content/uploads/breaking-bad-rv-1.jpg"
  },
  {
    destination: "Springfield",
    country: "U.S.A",
    distance: "10 500 km" ,
    photo:
      "https://ruche-pollen.com/wp-content/uploads/2017/03/centrale-nucleaire-springfield-1.jpg"
  },
  {
    destination: "Port Real",
    country: "Westeros",
    distance: "50 jours" ,
    photo:
      "https://static.actu.fr/uploads/2016/05/Image-27.png"
  },
  {
    destination: "Hill Valley",
    country: "U.S.A",
    distance: "25 000 miles" ,
    photo:
      "https://www.scifi-movies.com/images/contenu/data/0002008/image3.jpg"
  },
  {
    destination: "L'Etoile Noire",
    country: "Dans une galaxie lointaine, très lointaine",
    distance: " 14 000 années lumière" ,
    photo:
      "http://www.lepoint.fr/images/2016/09/02/5159188lpw-5159243-article-jpg_3755923.jpg"
  },
  
];


const Travels = () => (
    <div>
      {travels.map(travel => (
         <Travel 
         destination={travel.destination} 
         photo={travel.photo} 
         country={travel.country} 
         distance={travel.distance} 
         />
      ))}
    </div>
  );

export default Travels;