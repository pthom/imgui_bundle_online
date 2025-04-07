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

# Run the npm dev server
srv_dev:
    cd single_page_book_app && npm run dev


gpt_files_content:
    for f in $(cat f.txt); do echo "===========================================================================";echo "File $f"; echo "==========================================================================="; echo '```'; cat $f; echo '```'; done

# Create a json version of the table of content (for Single Page HTML)
tutorial_json_toc:
    python scripts/convert_toc.py

tutorial_prepare: tutorial_json_toc
    cd single_page_book_app && npm install

tutorial_book:
    cd jbook && rm -rf _build && export PYTHONPATH=$(pwd)/sphinx_ext_imgui && jupyter-book build .

tutorial_book_pdf:
    cd jbook && jupyter-book build --builder pdfhtml .
