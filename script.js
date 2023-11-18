document.write(
  navigator.vibrate(0) ? '<div class="vibrate">your phone is vibrate</div>' : 'NOT VIBRATE',
);

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
console.log(window.navigator.vibrate(100) ? 'vibrate' : 'not vibrate')
window.navigator.vibrate(5000);
