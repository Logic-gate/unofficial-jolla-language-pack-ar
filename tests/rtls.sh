#!/bin/bash

# Append rtl_.qml to all translated qml file in FILES.txt.

RTLSTRING=rtl._qml
FILES=FILES.txt
PATTERN="// RTL SUPPORT"
TEMP="$(mktemp)"

for arg in "$@"
do
    if [ "$arg" == "-rtl" ]
    then
        while read -r line || [[ -n "$line" ]]; do
    		LINE=$(echo "$line" | sed "s/.*://")
    		FILE=$(echo "$line" | sed "s/:.*//")
    		if grep -q "$PATTERN" "$FILE"; 
    		then
  				echo $FILE "Already has RTL Support"
  				continue
			else
    			sed -i "$LINE"r<(cat $RTLSTRING) $FILE
				echo $FILE "Appended --> Line" $LINE
			fi
		done < $FILES
    elif [ "$arg" == "-d" ] || [ "$arg" == "--default" ]
    then
    	while read -r line || [[ -n "$line" ]]; do
    		FILE=$(echo "$line" | sed "s/:.*//")
    		if grep -q "$PATTERN" "$FILE"; 
    		then
    			grep -v -x -f $RTLSTRING $FILE > $TEMP
    			mv $TEMP $FILE
				echo $FILE "Deleted RTL SUPPORT --> Line" $LINE
    		else
    			echo $FILE "No RTL Support Found"
    			continue
			fi
		done < $FILES
	elif [ "$arg" == "-h" ] || [ "$arg" == "--help" ] 
	then
		echo ""
		echo "RTLS<Right-To-Left Support> appends a mirroring declaration for RTL support given the file"
		echo "paths and line numbers in FILES.txt"
		echo ""
		echo '''rtls [OPTION]
Options:
   -rtl              Append the contents of rtl._qml to file list
   -d, --defualt     Remove mirroring declaration
   -h, --help        Print this help message

---------------

FILE.txt Syntax

<qml file path>:<line number(counting from 0)>

Example:

/usr/share/jolla-calendar/pages/EventEditPage.qml:12

When -rtl is passed it will append the contents of rtl._qml to line 13(counting from 0) to
/usr/share/jolla-calendar/pages/EventEditPage.qml
'''
   	fi
done
