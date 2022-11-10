const soap = require("soap");

soap
  .createClientAsync(
    "https://aimsinterface-production.up.railway.app/wsdl?wsdl"
  )
  .then((client) => {
    client.getSubjectsAsync({}).then((result) => {
      console.log(JSON.stringify(result[0].subjects, null, 2));
    });
  });
