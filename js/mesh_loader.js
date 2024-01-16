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
  container.style.height = "500px";
  container.appendChild(canvas);
  el.appendChild(container);

  var nv1 = new Niivue({
    show3Dcrosshair: true,
    backColor: [1, 1, 1, 1],
  });
  nv1.setSliceType(nv1.sliceTypeRender);
  nv1.attachToCanvas(canvas);
  nv1.opts.isColorbar = true;
  var meshLHLayersList1 = [
    {
      url: "images/BrainMesh_ICBM152.lh.motor.mz3",
      cal_min: 2,
      cal_max: 5,
      useNegativeCmap: true,
      opacity: 0.7,
    },
  ];
  nv1.loadMeshes([
    { url: "images/BrainMesh_ICBM152.lh.mz3", layers: meshLHLayersList1 },
  ]);
  nv1.setClipPlane([-0.1, 270, 0]);
  nv1.attachToCanvas(canvas);
}
