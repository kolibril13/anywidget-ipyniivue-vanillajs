import "./widget.css";

import { Niivue } from "@niivue/niivue";

export function render({ model, el }) {
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
