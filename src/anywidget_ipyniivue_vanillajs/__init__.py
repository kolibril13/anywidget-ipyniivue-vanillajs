import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("anywidget_ipyniivue_vanillajs")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class AnyNiivue(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    value = traitlets.Int(0).tag(sync=True)

    _my_volume_url = traitlets.Unicode("None").tag(sync=True)

    def add_volume(self, new_value):
      self._my_volume_url = new_value




      




class MeshLoader(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "mesh_loader.js"
    _css = pathlib.Path(__file__).parent / "static" / "mesh_loader.css"







class AnyNiivURL(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "minimal_from_url.js"
    # _css = pathlib.Path(__file__).parent / "static" / "using_slider.css"

    slider_value = traitlets.Int(20).tag(sync=True)