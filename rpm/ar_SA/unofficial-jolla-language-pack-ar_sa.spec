#make sure change these variables to suit your language
%define CONFLANG ar_SA
%define LOCNAME ar_SA
%define RPM_SUFFIX ar_sa
%define QM_SUFFIX ar_SA

Name: unofficial-jolla-language-pack-%{RPM_SUFFIX}
Version:	1.0.0
Release:	0.0.1
Summary:	Unofficial community Arabic translation for Jolla

Group: Qt/Qt
License: GPL
URL: https://github.com/Logic-gate/unofficial-jolla-language-pack-ar/tree/master/source/unofficial-jolla-language-pack-ar
Source0: %{name}.tar.bz2
BuildArch: noarch
BuildRoot: /var/tmp/%{name}-%{version}-XXXXXX
Packager: mad_dev

%include rpm/%{CONFLANG}/common.inc

%changelog
* Tue Jun 23 2020 mad_dev 1.0.0 0.0.1
- First RPM build
