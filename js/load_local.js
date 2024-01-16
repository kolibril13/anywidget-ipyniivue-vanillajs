import "./widget.css";

import { Niivue } from "@niivue/niivue";

function myLoadVolumes(nv, canvas) {
  let volumeList = [
    {
        url: "images/mni152.nii.gz",
        colormap: "gray",
        visible: true,
        opacity: 1,
      },
      {
        url: "images/hippo.nii.gz",
        colormap: "green",
        visible: true,
        opacity: 1,
      },
  ];
  nv.attachToCanvas(canvas);
  nv.loadVolumes(volumeList);
}

export async function render({ model, el }) {
  let canvas = document.createElement("canvas");
  let container = document.createElement("div");
  container.style.height = "300px";
  container.appendChild(canvas);
  el.appendChild(container);
  let nv = new Niivue();
  myLoadVolumes(nv, canvas);
}
