import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json"

function TravelList() {
    // console.log(travelPlansData);
    const [data, setData] = useState(travelPlansData)
    return (
        <div className="container p-5">
            {data.map( (tpd) => (
                <div className="container mb-3 d-flex flex-row flex-row border border-black" key={tpd.id}>
                    <div>
                    <img className= "p-3" width="350px" src={tpd.image} alt={tpd.destination} />
                    </div>
                    <div className="d-flex flex-column align-items-start pt-3">
                        <h3>{tpd.destination} ({tpd.days} Days)</h3>
                        <p>{tpd.description}</p>
                        <p><strong>Price:</strong> {tpd.totalCost} €</p>
                        <div className="container d-flex flex-row gap-2">
                        {tpd.totalCost <= 350 && <label className="bg-success rounded px-2"><strong>Great Deal</strong></label> }
                        {tpd.totalCost >= 1500 && <label className="bg-primary text-light rounded px-2"><strong>Premium</strong></label> }
                        {tpd.allInclusive && <label className="bg-primary text-light rounded px-2"><strong>All-Inclusive</strong></label> }
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TravelList;
