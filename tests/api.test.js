const request = require("supertest");
require("dotenv").config();

const Server = require("../src/models/server");

const server = new Server();
/* 
    Testing all endpoints
 */
describe("GET /location", () => {
  it("respond with json containing of climate by your location ip", (done) => {
    request(server.app)
      .get("/location")
      .set("Accept", "application/json")
      //.expect("Content-Type", /json/)
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, done);
  });
});
/* describe("GET /location NEW", () => {
  it("respond with json containing of climate by your location ip", (done) => {
    request(server.app)
      .get("/location")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json")
      .expect(200, done);
  });
}); */

describe("GET /current", () => {
  it("respond climate by your location ip or name", (done) => {
    request(server.app)
      .get("/current")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond climate by location name", (done) => {
    const data = { city: "San Miguel de Tucumán" };
    request(server.app)
      .get("/current")
      .send(data)
      .set("Accept", "application/json")
      //.expect("Content-Type", /json/)
      .expect("Content-Type", /json/)

      .expect(200, done);
  });
  it("response status 404", (done) => {
    const data = { city: "110sdaaa" };
    request(server.app)
      .get("/current")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
describe("GET /forecast", () => {
  it("respond climate by your location ip or name", (done) => {
    request(server.app)
      .get("/current")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond climate by location name", (done) => {
    const data = { city: "San Miguel de Tucumán" };
    request(server.app)
      .get("/current")
      .send(data)
      .set("Accept", "application/json")
      //.expect("Content-Type", /json/)
      .expect("Content-Type", /json/)

      .expect(200, done);
  });
  it("response status 404", (done) => {
    const data = { city: "110sdaaa" };
    request(server.app)
      .get("/current")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
