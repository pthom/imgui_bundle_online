REMOTE_FOLDER := "/home/pascal/dvp/_Bundle/imgui_bundle_online/imgui_bundle_pyodide_tooling"
REMOTE_USER_HOST := "pascal@192.168.1.50"


default:
  just --list


gpt_files_content:
    for f in $(cat f.txt); do echo "===========================================================================";echo "File $f"; echo "==========================================================================="; echo '```'; cat $f; echo '```'; done

