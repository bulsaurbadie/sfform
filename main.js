function showRecommendation() {
    // Get form values
    const carModel = document.getElementById("carModel").value;
    const carAge = parseInt(document.getElementById("carAge").value);
    const carMiles = parseInt(document.getElementById("carMiles").value);
    
    const collisionProtection = document.querySelector('input[name="collision"]:checked')?.value;
    const comprehensiveProtection = document.querySelector('input[name="comprehensive"]:checked')?.value;
    const uninsuredProtection = document.querySelector('input[name="uninsured"]:checked')?.value;
    const pipCoverage = document.querySelector('input[name="PIP"]:checked')?.value;
    const longDistanceDriving = document.querySelector('input[name="longDistance"]:checked')?.value;
    const roadsideAssistance = document.querySelector('input[name="roadside"]:checked')?.value;
    const rentalCoverage = document.querySelector('input[name="rental"]:checked')?.value;

    // Validate inputs
    if (!carModel || isNaN(carAge) || isNaN(carMiles) || !collisionProtection || !comprehensiveProtection || !uninsuredProtection || !pipCoverage || !longDistanceDriving || !roadsideAssistance || !rentalCoverage) {
        alert("Please fill in all fields.");
        return;
    }

    // Initialize points for each coverage type
    let coveragePoints = {
        "Collision": 0,
        "Comprehensive": 0,
        "Liability": 0,
        "Uninsured": 0,
        "Medical": 0,
        "Roadside": 0,
        "Rental": 0
    };

    // Assign points based on user preferences
    if (collisionProtection === "yes") coveragePoints.Collision = 3;
    if (comprehensiveProtection === "yes") coveragePoints.Comprehensive = 3;
    if (uninsuredProtection === "yes") coveragePoints.Uninsured = 2;
    if (pipCoverage === "yes") coveragePoints.Medical = 2;
    if (roadsideAssistance === "yes") coveragePoints.Roadside = 1;
    if (rentalCoverage === "yes") coveragePoints.Rental = 2;

    // For older cars, suggest liability coverage
    if (carAge > 10) coveragePoints.Liability = 3;

    // Find the coverage type with the highest points
    let maxPoints = Math.max(...Object.values(coveragePoints));
    let recommendedCoverage = Object.keys(coveragePoints).find(key => coveragePoints[key] === maxPoints);

    // Prepare the recommendation and description
    let recommendationText = "";
    let description = "";

    switch (recommendedCoverage) {
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

    // Display the recommendation
    document.getElementById("insuranceType").innerHTML = `<strong>${recommendationText}</strong>: ${description}`;
    document.getElementById("recommendation").style.display = "block";
}