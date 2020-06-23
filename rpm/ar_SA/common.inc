%define INSTALLDIR %{buildroot}/usr/share

%description
%{summary}

%prep
%setup -q -n %{name}

%build

%install
rm -rf %{INSTALLDIR}
mkdir -p %{INSTALLDIR}/translations
mkdir -p %{INSTALLDIR}/jolla-supported-languages
cp -a usr/share/translations/*-%{QM_SUFFIX}.qm %{INSTALLDIR}/translations/
cp -a usr/share/jolla-supported-languages/%{RPM_SUFFIX}.conf %{INSTALLDIR}/jolla-supported-languages/

%clean
rm -rf ${buildroot}

%files
%{_datadir}/translations/*-%{QM_SUFFIX}.qm
%{_datadir}/jolla-supported-languages/%{RPM_SUFFIX}.conf

%pre
/usr/bin/localedef --force --replace --verbose -i %{LOCNAME} -f UTF-8 %{LOCNAME}.utf8
exit 0
%postun
/usr/bin/localedef --delete-from-archive %{LOCNAME}.utf8
