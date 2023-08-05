

// Add your code here
function submitData(name, email) {
    const object = { name, email };
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
        document.body.innerHTML = error.message;
      });

}
