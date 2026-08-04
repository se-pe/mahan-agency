import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the MAHAN agency experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>MAHAN — Brand, Space &amp; Digital, from one studio in Shiraz<\/title>/i);
  assert.match(html, /An independent studio/);
  assert.match(html, /Selected work/);
  assert.match(html, /studio@mahan\.agency/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("server-renders headings already in register, so no-JS reads finished type", async () => {
  const html = await (await render()).text();
  // The storm is a progressive enhancement: the scatter class must never ship
  // in the server response, or a JS-less or background-tab visitor is left
  // looking at unreadable type.
  assert.doesNotMatch(html, /class="[^"]*\barmed\b/);
  assert.match(html, /aria-label="MAHAN"/);
});

test("carries its direction contract into the built output", async () => {
  const html = await (await render()).text();
  assert.match(html, /IMPECCABLE DIRECTION CONTRACT/);
});
