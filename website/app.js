// Personal API Key for OpenWeatherMap API
const apikey = `&appid=21ce8cad5daf9c4330138fa80bb819e8&units=metric`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
let d = new Date();
let newDate = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();

let c;
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", tempToday);

/* Function called by event listener */
function tempToday() {
  const cityCountry = document.querySelector("#zip").value;
  const feels = document.querySelector("#feelings").value;

  temp(url, cityCountry, apikey).then(() => {
    postTempo("http://localhost:8000/add", {
      temp: c,
      feel: feels,
      date: newDate,
    });
    // .then(updateUI());
    (() => {
      // Write updated data to DOM elements
      document.getElementById("temp").innerHTML = Math.round(c) + "degrees";
      document.getElementById("content").innerHTML = feels;
      document.getElementById("date").innerHTML = newDate;
    })();
  });
}

/* Function to GET Web API Data*/
const temp = async (api, zip, key) => {
  const res = await fetch(api + zip + key);
  try {
    const tempo = await res.json();
    c = tempo.main.temp;
    console.log(tempo);
  } catch (error) {
    console.log("erroe", error);
  }
};

/* Function to POST data */
const postTempo = async (url = "", data = {}) => {
  console.log(data);
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    return newData;
    console.log(newData);
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */

// const updateUI = async () => {
//   const request = await fetch("http://localhost:8000/all");
//   try {
//     // Transform into JSON
//     const allData = await request.json();
//     const a = allData.length - 1;
//     console.log(allData, a);
//     // Write updated data to DOM elements
//     document.getElementById("temp").innerHTML =
//       Math.round(allData[a].temp) + "degrees";
//     document.getElementById("content").innerHTML = allData[a].feel;
//     document.getElementById("date").innerHTML = allData[a].date;
//   } catch (error) {
//     console.log("error", error);
//     // appropriately handle the error
//   }
// };
