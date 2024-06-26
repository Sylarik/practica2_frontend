// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $addHeroe from "./routes/addHeroe.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $buscar_miHeroe_ from "./routes/buscar/[miHeroe].tsx";
import * as $deleteHeroe from "./routes/deleteHeroe.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $searchHeroe from "./routes/searchHeroe.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $DeleteForm from "./islands/DeleteForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/addHeroe.tsx": $addHeroe,
    "./routes/api/joke.ts": $api_joke,
    "./routes/buscar/[miHeroe].tsx": $buscar_miHeroe_,
    "./routes/deleteHeroe.tsx": $deleteHeroe,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/searchHeroe.tsx": $searchHeroe,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/Counter.tsx": $Counter,
    "./islands/DeleteForm.tsx": $DeleteForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
