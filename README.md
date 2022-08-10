## weather-jornal-app

---

this weather app takes in two entries from the user the (city,country) and the emotional state
then it fetches the temperature from OpenWeatherMap api then post it to a local server then it updates the UI.

## NEED FEEDBACK ON

---

when i used an async function to update the UI
the chain promise worked fine the first time around it got the data from the api then posted it to the server then fetched the data from the server and updated tHE UI,
THE second time around it updated the UI first then fitched the data from the api thenposted it to the server.
