window.onload = function() {
    const insuranceType = localStorage.getItem("insuranceRecommendation");
    document.getElementById("insuranceType").innerText = insuranceType || "No recommendation available";
};
