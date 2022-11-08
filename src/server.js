const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const axios = require("axios");
const soap = require("soap");

async function getSubjects(args, callback) {
  console.log("getSubjects called");

  const response = await axios.get("http://localhost:8081/subjects");
  const subjects = response.data;

  callback({
    subjects: subjects,
  });
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

server.listen(8000);
soap.listen(server, "/wsdl", services, xml, () => {
  console.log("server initialized");
});
