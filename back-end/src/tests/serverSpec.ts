import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("should get a successful response from GET /api/words", async () => {
    const response = await request.get("/api/words");
    expect(response.status).toBe(200);
  });

  it("should get a successful response from POST /api/rank", async () => {
    const response = await request.post("/api/rank").send({ finalScore: 30 });
    expect(response.status).toBe(200);
  });

  it("should get the correct rank from POST /api/rank with score 90", async () => {
    const response = await request.post("/api/rank").send({ finalScore: 90 });
    const { rank } = response.body.data;
    expect(rank).toBe(80);
  });
});
