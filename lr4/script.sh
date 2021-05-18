#!/bin/bash
sudo rm -R repository_git
sudo git remote remove public
sudo git remote add public https://github.com/serg1231-git/repos_git.git
links=https://github.com/serg1231-git/repos_git.git
git remote -v
mkdir repository_git
cd repository_git
git init
sudo cp -R /home/serg/lr3-git/projects/lr3/script.sh /home/serg/repository_git
sudo cp -R /home/serg/lr4/ /home/serg/repository_git
git checkout -b Lab_works
git status
git add script.sh
git commit -m 'Files of lr3'
git add lr4/script.sh
git commit -m 'Files of lr4'
sudo git push $links Lab_works
