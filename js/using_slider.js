import "./widget.css";

import { Niivue } from "@niivue/niivue";

export async function render({ model, el }) {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;

  var label = document.createElement("label");
  label.setAttribute("for", "meshSlider");
  label.textContent = "Threshold";
  label.style.color = "white";
  label.style.fontSize = "25px";
  // Create input
  var input = document.createElement("input");
  input.setAttribute("type", "range");
  input.setAttribute("min", "1");
  input.setAttribute("max", "49");
  input.setAttribute("value", "20");
  input.setAttribute("class", "slider");
  input.setAttribute("id", "meshSlider");
  input.style.width = "200px";

  // Append elements to #app
  el.appendChild(label);
  el.appendChild(input);

  input.oninput = function () {
    nv1.setMeshLayerProperty(nv1.meshes[0].id, 0, "cal_min", this.value * 0.1);
  };

  el.appendChild(canvas);

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
}
