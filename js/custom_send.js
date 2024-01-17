import "./widget.css";

import { Niivue } from "@niivue/niivue";

export async function render({ model, el }) {
  let canvas = document.createElement("canvas");
  let container = document.createElement("div");
  container.style.height = "300px";
  container.appendChild(canvas);
  el.appendChild(container);
  let nv = new Niivue();

  console.log("Hello World!");
  model.on("msg:custom", (msg) => {
    console.log("Custom message received!");
    console.log(msg.func);
    console.log(msg.args);
    nv.attachToCanvas(canvas);
    let funcname = msg.func;
    let volumeList = msg.args;
    nv[funcname](volumeList);
  });
}
