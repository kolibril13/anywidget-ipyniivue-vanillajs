import "./widget.css";

import { Niivue } from "@niivue/niivue";

function myLoadVolumes(nv, canvas, url) {
  let volumeList = [{ url: url }];
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

  
  myLoadVolumes(nv, canvas, model.get("_my_volume_url"));

  model.on("change:_my_volume_url", () => {
    url = myLoadVolumes(nv, canvas, model.get("_my_volume_url"));
  });
}
