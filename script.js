let isLogin = true;

// 🔁 Toggle Login / Signup
function toggleForm() {
    isLogin = !isLogin;

    document.getElementById("formTitle").innerText =
        isLogin ? "Login" : "Sign Up";
}

// 🔐 Login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    document.getElementById("auth").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Show logout
    document.getElementById("logoutText").style.display = "block";
}

// 🚪 Logout
function logout() {
    hideAll();

    document.getElementById("auth").style.display = "block";
    document.getElementById("logoutText").style.display = "none";
}

// 🎯 Coverage Slider (AI Pricing Simulation)
window.onload = function () {
    let saved = JSON.parse(localStorage.getItem("profile"));

if (saved) {
    document.getElementById("name").value = saved.name;
    document.getElementById("profileEmail").value = saved.email;
    document.getElementById("zone").value = saved.zone;
    document.getElementById("hours").value = saved.hours;
}
    let slider = document.getElementById("coverageSlider");

    if (slider) {
        slider.oninput = function () {
            let coverage = this.value;

            document.getElementById("coverageValue").innerText = coverage;

            let premium = Math.floor(coverage / 100);

            document.getElementById("premiumValue").innerText = premium;
            document.getElementById("premiumDisplay").innerText = premium;

            let risk = "Low";
            if (coverage > 3000) risk = "High";
            else if (coverage > 2000) risk = "Medium";

            document.getElementById("riskLevel").innerText = "Risk: " + risk;
        };
    }
};

// 🌧 Trigger Disruption
function triggerDisruption(type) {

    hideAll();
    document.getElementById("claim").style.display = "block";

    let amount = 0;

    // Reset statuses
    document.getElementById("rainStatus").innerText = "🌧 Rain: Normal";
    document.getElementById("heatStatus").innerText = "🔥 Heat: Normal";
    document.getElementById("pollutionStatus").innerText = "🌫 AQI: Moderate";

    if (type === "Heavy Rain") {
        amount = 300;
        document.getElementById("rainStatus").innerText = "🌧 Rain: HEAVY ⚠️";
    } 
    else if (type === "Extreme Heat") {
        amount = 200;
        document.getElementById("heatStatus").innerText = "🔥 Heat: EXTREME ⚠️";
    } 
    else if (type === "High Pollution") {
        amount = 150;
        document.getElementById("pollutionStatus").innerText = "🌫 AQI: HAZARDOUS ⚠️";
    }

    document.getElementById("protectionStatus").innerText = "🔴 Claim Triggered";

    // Claim Info
    document.getElementById("reason").innerText =
        "Disruption Detected: " + type;

    document.getElementById("amount").innerText =
        "₹" + amount + " credited instantly";

    // 🤖 AI Verification
    document.getElementById("gpsCheck").innerText = "Checking GPS...";
    document.getElementById("activityCheck").innerText = "Checking delivery activity...";
    document.getElementById("fraudCheck").innerText = "Analyzing fraud risk...";

    setTimeout(() => {
        document.getElementById("gpsCheck").innerText = "✅ GPS Verified";
    }, 1000);

    setTimeout(() => {
        document.getElementById("activityCheck").innerText = "✅ Activity Verified";
    }, 2000);

    let fraud = Math.random();

    setTimeout(() => {
        if (fraud < 0.8) {
            document.getElementById("fraudCheck").innerText = "✅ No Fraud Detected";
        } else {
            document.getElementById("fraudCheck").innerText = "❌ Suspicious Activity Detected";
            document.getElementById("amount").innerText = "⚠️ Claim Under Review";
        }
    }, 3000);
}

// ⬅ Back to Dashboard
function goBack() {
    hideAll();
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("protectionStatus").innerText = "🟢 Protection Active";
}

// 🎬 Demo Mode
function demoMode() {
    alert("Demo Mode Activated: Simulating Heavy Rain...");

    setTimeout(() => {
        triggerDisruption("Heavy Rain");
    }, 1500);
}

// ☰ Menu Toggle
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

// 📄 Navigation
function showHome() {
    hideAll();
    document.getElementById("dashboard").style.display = "block";
}

function showHistory() {
    hideAll();
    document.getElementById("history").style.display = "block";
}

function showProfile() {
    hideAll();
    document.getElementById("profile").style.display = "block";
}

// 🔄 Hide all pages
function hideAll() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("claim").style.display = "none";
}
function saveProfile() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("profileEmail").value;
    let zone = document.getElementById("zone").value;
    let hours = document.getElementById("hours").value;

    if (!name || !email || !zone || !hours) {
        alert("Please fill all fields");
        return;
    }

    // Save locally (for demo)
    localStorage.setItem("profile", JSON.stringify({
        name,
        email,
        zone,
        hours
    }));

    document.getElementById("saveMsg").innerText = "✅ Profile Saved!";
}