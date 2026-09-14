const mapElement = document.getElementById("map");

if (mapElement) {
  const coordinate = JSON.parse(mapElement.dataset.coordinates);
  const mapCoordinates = coordinate.map(Number);

  // Initializing the map
  const map = new maplibregl.Map({
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: mapCoordinates,
    zoom: 9,
    container: mapElement,
  });

  map.on("load", () => map.resize());
  map.on("error", (event) => {
    console.error("Map failed to load:", event.error);
  });

  //Creating the map popup
  const listing = JSON.parse(mapElement.dataset.listing);
  const popupContent = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = listing.title;
  const location = document.createElement("div");
  location.textContent = `${listing.location}, ${listing.country}`;
  const price = document.createElement("div");
  price.textContent = `Price: INR ${Number(listing.price).toLocaleString("en-IN")}`;
  popupContent.append(title, location, price);

  // Creating the map marker
  new maplibregl.Marker({ color: "#ff385c" })
    .setLngLat(mapCoordinates)
    .setPopup(new maplibregl.Popup({ offset: 25 }).setDOMContent(popupContent))
    .addTo(map);
}
