const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../index")
chai.use(chaiHttp)

describe("Realizando prueba con Mocha y Chai-http", function () {
  it("Realizando consulta GET - Probando endpoint '/deportes'", function () {
    chai
      .request(server)
      .get("/deportes")
      .end(function (err, res) {
        let data = JSON.parse(res.text);
        chai.expect(data).to.have.property("deportes");
        chai.expect(data.deportes).to.be.an("array");
      });
  });
});