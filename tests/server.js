import test from "ava";
import request from "supertest";
import server from "../server.js";

test('Server', async (t) => {
  const res = await request(server)
    .get('/hello')
    .set('Accept', 'application/json');

  console.log(res.body);
  t.is(res.status, 200);
  t.deepEqual(res.body, { hello: "world" });

});
