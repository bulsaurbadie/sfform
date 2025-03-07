window.onload = function() {
    const insuranceType = localStorage.getItem("insuranceRecommendation");
    let recommendationText = "";
    let description = "";
    switch (insuranceType) {
        case "Collision":
            recommendationText = "Collision Coverage";
            description = "Collision coverage helps pay to repair or replace your vehicle if it overturns or collides with another vehicle or object.";
            break;
        case "Comprehensive":
            recommendationText = "Comprehensive Coverage";
            description = "Comprehensive coverage helps pay to repair or replace your vehicle if it's damaged by something other than a collision, including theft, fire, vandalism, or hitting an animal.";
            break;
        case "Liability":
            recommendationText = "Liability Coverage";
            description = "Liability coverage pays another party's medical expenses, vehicle repairs, and property damage if you were responsible for the accident.";
            break;
        case "Uninsured":
            recommendationText = "Uninsured & Underinsured Motorist Coverage";
            description = "This coverage helps pay for medical expenses, pain and suffering, and lost wages if you're hit by someone who doesn’t have enough insurance or none at all.";
            break;
        case "Medical":
            recommendationText = "Medical Payments Coverage";
            description = "Medical payments coverage helps pay medical and funeral expenses if an insured person is injured or killed in an accident.";
            break;
        case "Roadside":
            recommendationText = "Emergency Road Service Coverage";
            description = "This helps you get back on the road quickly by covering the cost of towing, flat tire changes, and other roadside repairs.";
            break;
        case "Rental":
            recommendationText = "Car Rental Reimbursement Coverage";
            description = "Rental car reimbursement coverage helps pay for a rental car while your car is being repaired after an accident.";
            break;
    }
    document.getElementById("insuranceType").innerText = recommendationText || "No recommendation available";
};
