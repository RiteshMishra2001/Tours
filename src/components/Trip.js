import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from"../assets/9.jpg"
import Trip2 from"../assets/10.jpg"
import Trip3 from"../assets/11.jpg"
function Trip(){
    return (
        <div className="trip">
            <h1>
                Recent Trips
            </h1>
            <p> You can plan your trip</p>
            <div className="tripcard">
            <TripData 
                image={Trip1}
                heading = "Trip to Goa"
               
                />
            <TripData 
                image={Trip2}
                heading = "Trip to Ladakh"
               
                />
                <TripData 
                image={Trip3}
                heading = "Trip to Kashmir"
               
                />
            </div>
        </div>
    );

}

export default Trip;