import "./widget.css";

import { Niivue } from "@niivue/niivue";

export async function render({ model, el }) {
  let canvas = document.createElement("canvas");
  let container = document.createElement("div");
  container.style.height = "300px";
  container.appendChild(canvas);
  el.appendChild(container);
  let nv = new Niivue();
  nv.attachToCanvas(canvas);
  nv.loadVolumes([
    { url: "https://niivue.github.io/niivue/images/mni152.nii.gz" },
  ]);
}
