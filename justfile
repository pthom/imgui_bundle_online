REMOTE_FOLDER := "/home/pascal/dvp/_Bundle/imgui_bundle_pyodide_tooling/repositories/pyodide"
REMOTE_USER_HOST := "pascal@192.168.1.50"
BASE_PACKAGE_LIST := "numpy Pillow pandas ipython requests opencv-python typing-extensions pydantic munch matplotlib future scikit-learn"


default:
  just --list


# Copy the dist folder from the remote machine
copy_dist:
    mkdir -p pyodide_dist
    rsync -avz --delete {{REMOTE_USER_HOST}}:{{REMOTE_FOLDER}}/dist/ pyodide_dist/
    cp {{FIATLIGHT_FOLDER}}/dist/*.whl pyodide_dist/
    cp {{PROBABL_FOLDER}}/scatter/dist/*.whl pyodide_dist/


default:
  just --list


gpt_files_content:
    for f in $(cat f.txt); do echo "===========================================================================";echo "File $f"; echo "==========================================================================="; echo '```'; cat $f; echo '```'; done

