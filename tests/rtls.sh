#!/bin/bash

# Append rtl_.qml to all translated qml file in FILES.txt.

RED='\033[0;31m'
GREEN='\033[0;32m'
N='\033[0m'
RTLSTRING=${RTLSTRING:=rtl._qml}
FILES=${FILES:=FILES.txt}
PATTERN=${PATTERN:="// RTL SUPPORT"}
TEMP="$(mktemp)"
TS=`date --rfc-3339=seconds`


SUM () {
SUM=$(sha1sum $1 | awk '{ print $1 }')
echo -e "$1 --> $SUM"
echo -e "$3::$2::$TS $1 $SUM" >> rtls.log
}

check () {
awk "/$1/ && /$2/" rtls.log
}

append () {
if [[ -f $1 ]]
  then
  echo "Overwriting default FILES file"
  FILES=$1
fi
if [[ -f $2 ]]
  then
  echo "Overwriting default RTLSTRING file"
  RTLSTRING=$2
fi
echo "Reading $FILES"
echo -e "Appending...\n"
cat -n $RTLSTRING
echo -e "\n"
while read -r line || [[ -n "$line" ]]; do
        LINE=$(echo "$line" | sed "s/.*://")
        FILE=$(echo "$line" | sed "s/:.*//")
        #   if grep -q "$PATTERN" "$FILE"; 
        #     then
        #     echo $FILE "Already has RTL Support"
        #       continue;
        #   else
        if [[ -f $FILE ]]
          then
            SUM $FILE "o" "Append"
            cat $FILE > $TEMP
            sed -i "$LINE"r<(cat $RTLSTRING) $FILE
            diff $TEMP $FILE
            SUM $FILE "a" "Append"
            echo -e $FILE "${GREEN}Appended${N} --> ${GREEN}Line${N}" $LINE "\n"
        else 
          echo -e "$FILE" "${RED}Not Found..ignoring${N}\n"
        fi
done < $FILES
}

delete () {
if [[ -f $1 ]]
  then
  echo "Overwriting default FILES file"
  FILES=$1
fi
if [[ -f $2 ]]
  then
  echo "Overwriting default RTLSTRING file"
  RTLSTRING=$2
fi
echo "Reading $FILES"
while read -r line || [[ -n "$line" ]]; do
        FILE=$(echo "$line" | sed "s/:.*//")
        if [[ -f $FILE ]]
          then
            if grep -q "$PATTERN" "$FILE"; 
              then
                SUM $FILE "a" "Delete"
                grep -v -x -f $RTLSTRING $FILE > $TEMP
                diff $FILE $TEMP
                mv $TEMP $FILE
                SUM $FILE "o" "Delete"
                chmod 644 $FILE
                echo -e $FILE "${RED}Deleted RTL SUPPORT${N} --> ${RED}Line${N}" $LINE "\n"
            else
                echo -e $FILE "${RED}No RTL Support Found${N}\n"
                continue
            fi
        else 
          echo -e "$FILE" "${RED}Not Found..ignoring${N}\n"
        fi
done < $FILES
}

for arg in "$@"
    do
      if [ "$arg" == "-rtl" ]
        then
          append $2 $3
      elif [ "$arg" == "-d" ] || [ "$arg" == "--default" ]
        then
          delete $2 $3
      elif [ "$arg" == "-c" ] || [ "$arg" == "--check" ]
        then
          check $2 $3
          echo "o = original, a = appended"
          echo "Append = Append Operation, Delete = Delete Operation"
      elif [ "$arg" == "-h" ] || [ "$arg" == "--help" ] 
        then
          echo ""
          echo "RTLS<Right-To-Left Support> appends a mirroring declaration for RTL support given the file"
          echo "paths and line numbers in FILES.txt"
          echo ""
          echo '''rtls [OPTION] <FILES> <RTLSTRING>
Options:
   -rtl                       Append the contents of rtl._qml to FILES list
   -d, --defualt              Remove mirroring declaration
   -h, --help                 Print this help message
   -c, --check                Shortcut to awk "/$1/ && /$2/" rtls.log
---------------
  FILES --> defualt is FILES.txt
  RTLSTRING --> default is rtl._qml

  to pass RTLSTRING, FILES must be passed as the first arg.

  ./rtls.sh -rtl FILES.txt rtl._qml && ./rtls.sh -d FILES.txt rtl_.qml

FILE.txt Syntax

<qml file path>:<line number(counting from 0)>

Example:
/usr/share/jolla-calendar/pages/EventEditPage.qml:12

When -rtl is passed it will append the contents of rtl._qml to line 13(counting from 0) to
/usr/share/jolla-calendar/pages/EventEditPage.qml
'''
     fi
done
