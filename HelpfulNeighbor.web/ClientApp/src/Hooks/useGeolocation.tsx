import {useEffect} from 'react'

function useGeolocation(){
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(position: GeolocationPosition) {
    var currLocation = position.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${currLocation.latitude}`);
    console.log(`Longitude: ${currLocation.longitude}`);
    console.log(`More or less ${currLocation.accuracy} meters.`);
  }

  function errors(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted call function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  });

  return (
  <div>

  </div>
  );
}

export default useGeolocation;