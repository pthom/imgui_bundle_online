#!/bin/zsh
THIS_DIR=${0:a:h}  # specific to zsh
echo "THIS_DIR=$THIS_DIR"

REMOTE_FOLDER="/home/pascal/dvp/_Bundle/imgui_bundle_online/imgui_bundle_pyodide_tooling"
REMOTE_USER_HOST="pascal@192.168.1.50"
REMOTE_PYODIDE_DIST="$REMOTE_FOLDER/repositories/pyodide/dist"
LOCAL_PYODIDE_DIST="$THIS_DIR/../pyodide_dist"

rsync -avz --delete $REMOTE_USER_HOST:$REMOTE_PYODIDE_DIST/ $LOCAL_PYODIDE_DIST/
