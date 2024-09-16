import app from "../index";
import request from "supertest";

describe("GET /", () => {
  it('responds with "Welcome to unit testing guide for nodejs, typescript and express"', async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Welcome to unit testing guide for nodejs, typescript and express");
  });
});
