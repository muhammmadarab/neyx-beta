async function fetchData() {
  url = "https://neyx-server.herokuapp.com/team";

  console.log("Fetching...");

  let response = await fetch(url, {headers: {"Content-Type": "application/json"}});

  if (response.ok) {
    let json = await response.json();
    let team = json["team"];
    let photo = team[0]["photo"];
    let FirstRemoved = photo.slice(1);
    let SecondRemoved = FirstRemoved.slice(1);
    let LastRemoved = SecondRemoved.slice(0, SecondRemoved.length - 1);
    // let binary = atob(LastRemoved);
    var img = document.createElement('img');
    img.src = 'data:image/jpeg;base64,' + LastRemoved;
    document.body.appendChild(img);

  } else {
    alert("HTTP-Error: " + response.status);
  }
}