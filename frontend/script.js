const apiURL = "http://localhost:5000/api/rides";


document.getElementById("rideForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const ride = {
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    pickupPoint: document.getElementById("pickupPoint").value,
    seats: document.getElementById("seats").value,
    contactNumber: document.getElementById("contactNumber").value
  };

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ride)
    });

    const data = await response.json();
    alert(data.message);
    document.getElementById("rideForm").reset();
    fetchRides(); 
  } catch (error) {
    alert(" Error in posting a ride");
    console.error(error);
  }
});

async function fetchRides() {
  try {
    const res = await fetch(apiURL);
    const rides = await res.json();
    const list = document.getElementById("rideList");
    list.innerHTML = "";
    rides.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `
        <b>${r.from}</b> ➜ <b>${r.to}</b><br>
        Date: ${r.date} | Time: ${r.time}<br>
        Pickup: ${r.pickupPoint}<br>
        Seats: ${r.seats}<br>
        Contact: ${r.contactNumber}
      `;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching rides:", error);
  }
}

fetchRides();
