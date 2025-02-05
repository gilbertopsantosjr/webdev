document.addEventListener("DOMContentLoaded", async function () {
  const url_server = "https://swapi.dev/api/people/1/";
  // XMLHttpRequest() // is ajax , is request made by behind http protocols
  // default method would HTTP GET
  // sync call doesnt need to wait for a response to continue
  // async call need to wait for a response to continue
  const result = await fetch(url_server);
  if (result.ok) {
    const luke = await result.json();
    document.getElementById(`content`).innerHTML = luke.name;
  } else {
    console.error(result.statusText);
  }
});

function getSomething() {
  return Promise.resolve("something");
}

console.log(`call the promise`, getSomething());
