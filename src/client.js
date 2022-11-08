const soap = require("soap");

soap.createClientAsync("http://localhost:8000/wsdl?wsdl").then((client) => {
  client.getSubjectsAsync({}).then((result) => {
    console.log(JSON.stringify(result[0].subjects, null, 2));
  });
});
