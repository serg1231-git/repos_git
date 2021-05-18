#!/bin/bash
sudo rm -R repository_git
echo "Please enter the links of git repository"
read links
sudo git remote remove public
sudo git remote add public $links
mkdir repository_git
cd repository_git
git init
sudo cp -R /home/serg/lr3-git/projects/lr3/script.sh /home/serg/repository_git
sudo cp -R /home/serg/lr4/ /home/serg/repository_git
git checkout -b Labs_work
git status
git add script.sh
git commit -m 'Files of lr3'
git add lr4/script.sh
git commit -m 'Files of lr4'
sudo git push $links Labs_work
