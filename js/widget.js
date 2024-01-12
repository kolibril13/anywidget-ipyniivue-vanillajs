import "./widget.css";

import { Niivue } from "@niivue/niivue";

export function render({ model, el }) {
  const canvas = document.createElement("canvas");
  canvas.id = "gl";
  canvas.width = 800;
  canvas.height = 800;

  // Append the canvas to the element with id="app"
  el.appendChild(canvas);

  // Make an array of volumes to load
  let volumeList = [
    { url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz" },
  ];

  const nv = new Niivue({ isResizeCanvas: false });
  nv.attachTo("gl"); // attach to canvas with id="gl"
  nv.loadVolumes(volumeList);
}
