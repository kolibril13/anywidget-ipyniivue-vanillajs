// import "./widget.css";

import { Niivue } from "@niivue/niivue";

export async function render({ model, el }) {
  let canvas = document.createElement("canvas");
  let container = document.createElement("div");
  container.style.height = "300px";
  container.appendChild(canvas);
  el.appendChild(container);

  const nv = new Niivue();
  nv.attchToCanvas(canvas);

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
  nv.loadVolumes(volumeList);

  // model.on("msg:custom", msg => {
  //    if (msg.type !== "api") {
  //      return; // not a an API call
  //    }
  //    if (typeof nv[msg.func] !== "function") {
  //      throw new Error(`${msg.func} is not a exposed on Niivue API.`);
  //    }
  //    nv[msg.func](...msg.args);
  // });

  // el.appendChild(div);
}
