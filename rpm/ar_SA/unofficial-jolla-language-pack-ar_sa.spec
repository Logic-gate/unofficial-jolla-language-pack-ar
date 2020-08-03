#make sure change these variables to suit your language
%define CONFLANG ar_SA
%define LOCNAME ar_SA
%define RPM_SUFFIX ar_sa
%define QM_SUFFIX ar_SA

Name: unofficial-jolla-language-pack-%{RPM_SUFFIX}
Version:	1.1.0
Release:	1.2.8
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
* Mon Aug 3 2020 mad_dev 1.1.0 1.2.8
- sailfishsilica-qt5 revert to origin
* Mon Aug 3 2020 mad_dev 1.1.0 1.2.7
- Inconsistency with "%" placement in Transfers
* Mon Aug 3 2020 mad_dev 1.1.0 1.2.6
- Inconsistency with "%" placement
- Changes to hour, min, sec short var
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.5
- Inconsistency with "%" placement
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.4
- Inconsistency with "%" placement
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.3
- Inconsistency with "%" placement
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.2
- "%" issue fixed
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.1
- Test
* Mon Jul 27 2020 mad_dev 1.1.0 1.2.0
- First build from the pootle
* Wed Jul 15 2020 mad_dev 1.1.0 1.1.0
- Complete settings, typos fixes
* Tue Jul 12 2020 mad_dev 1.1.0 1.0.9
- Parts of Settings
* Tue Jul 6 2020 mad_dev 1.1.0 1.0.8
- Notes, Msg
* Tue Jul 4 2020 mad_dev 1.1.0 1.0.7
- Text Input -- rtl
* Tue Jul 4 2020 mad_dev 1.1.0 1.0.6
- Fix Text Input
* Tue Jul 4 2020 mad_dev 1.1.0 1.0.5
- Ref: Github Commits on Jul 4, 2020
* Tue Jul 1 2020 mad_dev 1.1.0 1.0.4
- Ref: Github Commits on Jul 1, 2020
* Tue Jun 28 2020 mad_dev 1.1.0 1.0.3
- Device Lock and Contacts
* Tue Jun 28 2020 mad_dev 1.1.0 1.0.2
- Jolla Clock
* Tue Jun 28 2020 mad_dev 1.1.0 1.0.1
- Jolla Camera
* Tue Jun 27 2020 mad_dev 1.1.0 1.0.0
- Silica Comp. Cancel Test, release change
* Tue Jun 23 2020 mad_dev 1.0.0 0.0.1
- First RPM build