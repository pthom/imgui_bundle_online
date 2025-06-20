"""Launches the Full ImPlot Demo.

There are *lots* of demos.
Each of them can show its source code.

"""
from imgui_bundle import immapp
from imgui_bundle.demos_python.demos_implot import implot_demo
from imgui_bundle.demos_python import demo_utils
demo_utils.set_hello_imgui_demo_assets_folder()

def gui():
    implot_demo.show_all_demos()


immapp.run(gui, with_implot=True, with_markdown=True)
