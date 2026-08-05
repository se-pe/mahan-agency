import { builder } from "@builder.io/sdk";

// Builder public keys identify a space and are intended to ship in browser
// code. Private/admin keys never belong in this repository or the website.
export const BUILDER_PUBLIC_API_KEY = "1a9b128d32a6410486191cc0adb2489b";
export const BUILDER_CONTENT_MODEL = "mahan-content";

builder.init(BUILDER_PUBLIC_API_KEY);
builder.apiVersion = "v3";

export { builder };
