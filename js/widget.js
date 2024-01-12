import "./widget.css";

import { Niivue } from "@niivue/niivue";

export function render({ model, el }) {
  let btn = document.createElement("button");
  btn.classList.add("anywidget_ipyniivue_vanillajs-counter-button");
  btn.innerHTML = `count is ${model.get("value")}`;
  btn.addEventListener("click", () => {
    model.set("value", model.get("value") + 1);
    model.save_changes();
  });
  model.on("change:value", () => {
    btn.innerHTML = `count is ${model.get("value")}`;
  });
  el.innerHTML = "Hello World!";
  el.appendChild(btn);
  var textNode = document.createTextNode("Goodbye");
  el.appendChild(textNode);

  var divElement = document.createElement("div");
  var canvasElement = document.createElement("canvas");
  canvasElement.id = "gl";
  canvasElement.width = "800";
  canvasElement.height = "800";
  divElement.appendChild(canvasElement);
  el.appendChild(divElement);

  let volumeList = [
  { url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz" },
];
const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl"); // attach to canvas with id="gl"
nv.loadVolumes(volumeList);
}