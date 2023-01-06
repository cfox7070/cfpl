 #bin/bash

 servFile="./redrr/html/js/redrr-fastopt.js"
 targFile="./redrr/target/scala-2.12/redrr-fastopt.js"
 servMap="./redrr/html/js/redrr-fastopt.js.map"
 targMap="./redrr/target/scala-2.12/redrr-fastopt.js.map"

 
lastModificationSecondsFOServ=$(date +%s -r $servFile)
lastModificationSecondsFOTarg=$(date +%s -r $targFile)

if [ -z "$lastModificationSecondsFOTarg" ]; then lastModificationSecondsFOTarg=0; fi
 
 if [ $lastModificationSecondsFOTarg -gt $lastModificationSecondsFOServ ]
    then
        kdialog --passivepopup "server file is obsolete, removing old files" 2
        rm $servFile
        link $targFile $servFile
        rm $servMap
        link $targMap $servMap
    else
        kdialog --passivepopup "server file is up to date" 2
   fi
 #rm /var/www/html/hvac/js/redrr-jsdeps.js
# echo "linking to new"
 
#link /home/mrr/Programming/scala/sbt-projects/turns/draftt/redrr/target/scala-2.12/redrr-jsdeps.js /var/www/html/hvac/js/redrr-jsdeps.js
