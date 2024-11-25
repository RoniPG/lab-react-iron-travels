import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json"
import TravelPlanCard from "../travel-plan-card/travel-plan-card";

function TravelList() {
    // console.log(travelPlansData);
    const [plan, setPlan] = useState(travelPlansData)
    const handleDelete = (event) => {
        const filterPlan = plan.filter((plan) => (
            plan.id !== parseInt(event.target.id)
        ))
        setPlan(filterPlan)
    }
    return (
        <div className="container p-5">
            <TravelPlanCard plan={plan} handleDelete={handleDelete} />
        </div>
    );
}

export default TravelList;
