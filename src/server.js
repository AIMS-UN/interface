const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const axios = require("axios");
const soap = require("soap");

async function getSubjects(_, callback) {
  console.log("getSubjects called");

  const response = await axios.get(process.env.SUBJECTS_URL + "/subjects");

  callback({ subjects: response.data });
}

const services = {
  SubjectsService: {
    SubjectsServiceSoapPort: {
      getSubjects: getSubjects,
    },
  },
};

const xml = fs.readFileSync(path.join(__dirname, "service.wsdl"), "utf8");

const server = http.createServer((request, response) => {
  response.end("404: Not Found: " + request.url);
});

server.listen(process.env.PORT ?? 8000);
let myServer = soap.listen(server, "/wsdl", services, xml, () => {
  console.log("server initialized");
});

myServer.log = function (type, data) {
  console.log(type, data);
};
