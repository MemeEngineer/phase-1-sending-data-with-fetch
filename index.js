// Add your code here
  function submitData(name, email){

    const formData = {
        name: name,
        email: email,
      };
    

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        let p = document.createElement('p');
            p.textContent = object.id;
            document.body.appendChild(p);
            console.log(object);
    })
    .catch(function (error) {
      let div = document.createElement('div');
      div.textContent=error.message;
      document.body.appendChild(div);
      console.log(error.message);
    });
  }