#!/bin/zsh

REMOTE_FOLDER="/home/pascal/dvp/_Bundle/imgui_bundle_online/imgui_bundle_pyodide_tooling"
REMOTE_USER_HOST="pascal@192.168.1.50"
ACTIVATE_CONDA="source ~/miniforge3/etc/profile.d/conda.sh"
RUN_IN_CONDA_PYODIDE="conda run -n pyodide-env"

ssh $REMOTE_USER_HOST "$ACTIVATE_CONDA && cd $REMOTE_FOLDER && $RUN_IN_CONDA_PYODIDE just build_pyodide_imgui_bundle"
