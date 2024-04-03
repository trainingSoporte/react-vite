#!/bin/bash

folders=("api" "common" "core" "interfaces" "presentation")
folderRef="presentation"
subFolders=("components" "layouts" "pages" "router" "templates")

read -p "Enter a root source Folder name (example: ./my-project/src/) :" folderName


if [ -d $folderName ]; then
    for dir in "${folders[@]}"; do
    if [ -d $folderName"/"$dir ]; then
    echo "The folder: $folderName/$dir, already exists ."
    else 
    echo "Creating folder: $folderName/$dir"
    mkdir $folderName"/"$dir
    if [ $? -eq 0 ];
        then
        echo "Create folder: $folderName/$dir, done."
            case $dir in
            "presentation")
            echo "true $dir"
                for sdir in "${subFolders[@]}"; do
                mkdir $folderName"/"$dir"/"$sdir
                if [ $? -eq 0 ];
                then
                    echo "Create sub-folder: $folderName/$dir/$sdir, done."
                else
                    echo "Error create sub-folder: $folderName/$dir/$sdir."
                fi
                done
            
            esac
        else
        echo "Error create folder: $folderName/$dir."
        fi
    fi
    done
else echo "root src: $folderName, No such file or directory"
fi


