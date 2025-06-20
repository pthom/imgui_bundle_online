REMOTE_FOLDER := "/home/pascal/dvp/_Bundle/imgui_bundle_online/imgui_bundle_pyodide_tooling/repositories/pyodide"
REMOTE_USER_HOST := "pascal@192.168.1.50"


default:
  just --list


# mirror REMOTE_FOLDER/dist to local folder pyodide_dist
mirror_pyodide_dist:
  rsync -avz --delete {{REMOTE_USER_HOST}}:{{REMOTE_FOLDER}}/dist/ ./pyodide_dist


gpt_files_content:
    for f in $(cat f.txt); do echo "===========================================================================";echo "File $f"; echo "==========================================================================="; echo '```'; cat $f; echo '```'; done


REMOTE_FOLDER_DEPLOY := "/home/pascal/HTML/imgui_bundle_online"
REMOTE_USER_HOST_DEPLOY := "pascal@traineq.org"

deploy_pyodide_dist:
  rsync -avz --delete ./pyodide_dist/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/pyodide_dist
  rsync -avz --delete ./projects/imgui_bundle_playground/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/projects/imgui_bundle_playground
  rsync -avz --delete ./projects/min_bundle_pyodide_app/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/projects/min_bundle_pyodide_app
  rsync -avz --delete ./pyodide_dist.tgz {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/pyodide_dist.tgz
