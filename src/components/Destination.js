import Beach1 from "../assets/8.jpg"
import Beach2 from "../assets/9.jpg"
import DestinationData from "./DestinationData";

import "./DestinationStyles.css";
const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p> Trips give you the memories</p>
           
            <DestinationData
            heading="Goa"
            text="Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24x7. The laid-backness (susegad) of Goa attracts as many international tourists as it does Indians, or even more so. The Goans are quite friendly towards tourists and celebrate many festivals throughout the year, the most famous being the New Year and Goa Carnival. While the seafood is excellent, Goa has one of the best nightlife in India with trendy bars, beach shacks, elegant cafes and many clubs and discotheques. Thanks to lower alcohol prices in the state, Goa is also great for younger tourists with relatively tighter pockets.For those of us perpetually confused between North Goa and South Goa, this might help - the state of Goa is divided into North Goa and South Goa. While North Goa is the nightlife hub where all the touristy beaches, flea markets, and beach shacks are located, South Goa is the land of luxurious resorts and laid-back beach vibes. Having been a Portuguese territory for almost 450 years, the Portuguese architectureis nowhere as prevalent as in Goa - visit one of the many whitewashed churches, crumbling forts or spectacular churches. The yellow houses with purple doors, ochre coloured mansions and oyester shell windows is what completes the kalieodscope of Goan architecture.Panjim, the capital city located in the centre overlooks the calm Mandovi River where the famous floating casinos of Goa are docked. The centre is well-connected with an international airport and roads and trains run from North to South part of Goa. With a coastline stretching for over 100 kilometres, Goa has stunning beaches. While Baga and Calangute are more popular among the Indian family crowd, Anjuna and Arambol draw a lot of foreign tourists. The beaches in South Goa are relatively lesser explored, but some of them like Agonda and Palolem are more beautiful."
            img1={Beach1}
            img2={Beach2}/>
            
        </div>
    );
};
 export default Destination;