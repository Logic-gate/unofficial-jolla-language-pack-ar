#!/bin/bash
##############################################
#
# createrpm.sh
#
# This script create the langupack rpm.
#
##############################################

SAVEDIR=$PWD/release_rpms
if [ ! -e "$SAVEDIR" ]
then
    echo creating "$SAVEDIR"...
    mkdir "$SAVEDIR"
elif [ ! -d "$SAVEDIR" ]
then
    echo "$SAVEDIR is not a dir"
    exit -1
fi

if [ -z $LANGCODE ] 
then
    echo "The LANGCODE variable is not set!"
    echo "Please set it with export LANGCODE=<language code> before calling this script!"
    echo "The variable should match with rpm spec file suffix and the ."
    exit -1
fi

LANGCODE_LOWER=$(echo "$LANGCODE" | tr '[:upper:]' '[:lower:]')

PKGNAME=unofficial-jolla-language-pack-${LANGCODE_LOWER}

if [ x"${TOPDIR}" == x ]; then
    TOPDIR=$HOME/rpmbuild
fi

#if [ ! -d ${TOPDIR} ]; then
    rm -rf ${TOPDIR}
    mkdir ${TOPDIR}
#fi

for n in SOURCES RPMS SRPMS BUILD BUILDROOT SPECS
do
    if [ ! -d ${TOPDIR}/$n ]; then
        mkdir ${TOPDIR}/$n
    fi  
done

SOURCEFILE=${TOPDIR}/SOURCES/${PKGNAME}.tar.bz2

if [ ! -e ${SOURCEFILE} ]; then
    rm -rf rpmbuild
    mkdir -p rpmbuild/${PKGNAME}
    cp -r rpm rpmbuild
    mkdir -p rpmbuild/${PKGNAME}/usr/share/translations
    cp -r regions/$LANGCODE/usr/share/translations/*$LANGCODE* rpmbuild/${PKGNAME}/usr/share/translations/
    mkdir -p rpmbuild/${PKGNAME}/usr/share/jolla-supported-languages
    cp regions/$LANGCODE/usr/share/jolla-supported-languages/$LANGCODE_LOWER.conf rpmbuild/${PKGNAME}/usr/share/jolla-supported-languages/$LANGCODE_LOWER.conf
    cd rpmbuild
    tar jcvf ${TOPDIR}/SOURCES/${PKGNAME}.tar.bz2 ${PKGNAME}
fi
echo "rpmbuild --define "_topdir ${TOPDIR}" -ba rpm/unofficial-jolla-language-pack-${LANGCODE_LOWER}.spec --target noarch"
rpmbuild --define "_topdir ${TOPDIR}" -bb rpm/$LANGCODE/unofficial-jolla-language-pack-${LANGCODE_LOWER}.spec --target noarch


cp ${TOPDIR}/RPMS/noarch/*.rpm $SAVEDIR
