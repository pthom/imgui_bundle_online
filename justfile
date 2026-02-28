REMOTE_FOLDER_DEPLOY := "/home/pascal/HTML/imgui_bundle_online"
REMOTE_USER_HOST_DEPLOY := "pascal@traineq.org"

default:
  just --list

server:
    echo "http://localhost:7418/ is the URL to access the server, you can stop it with Ctrl-C"
    python webserver_multithread_policy.py -p 7418

deploy_imgui_bundle_online:
  rsync -avz --delete ./pyodide_dist/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/pyodide_dist
  rsync -avz --delete ./projects/imgui_bundle_playground/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/projects/imgui_bundle_playground
  rsync -avz --delete ./projects/min_bundle_pyodide_app/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/projects/min_bundle_pyodide_app
  rsync -avz --delete ./projects/bundle_wheel/ {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/projects/bundle_wheel
  rsync -avz --delete ./pyodide_dist.tgz {{REMOTE_USER_HOST_DEPLOY}}:{{REMOTE_FOLDER_DEPLOY}}/pyodide_dist.tgz
  echo "Deployed to https://traineq.org/imgui_bundle_online/"
