#!/bin/bash
find_directory=$(find `pwd` -name venv)
find_files=$(find `pwd` -name start.sh)
if [[ $find_directory ]];
then
source ./venv/bin/activate
echo "Enrivonment python found"
echo "****"
else
echo "Environment python not found"
fi;
if [[ $find_files ]];
then
chmod +x start.sh
echo "*****"
./start.sh
echo "*****"
else
echo "File start.sh not found"
fi;
echo "List of files and directories `pwd`"
ls -1 -a

