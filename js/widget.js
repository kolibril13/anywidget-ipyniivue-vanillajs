import "./widget.css";




import { Niivue } from "@niivue/niivue";
// make an array of volumes to load
let volumeList = [
  { url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz" },
];




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
}


