function showRecommendation(event) {
    event.preventDefault(); // Prevent form submission
    
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

    // Save recommendation in localStorage
    localStorage.setItem("insuranceRecommendation", recommendedCoverage);

    // Redirect to the result page
    window.location.href = "result.html";
}
