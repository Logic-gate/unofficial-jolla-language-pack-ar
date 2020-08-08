import requests
import hashlib
import json

BASE="https://raw.githubusercontent.com/Logic-gate/unofficial-jolla-language-pack-ar/master/tests/"
FILES="FILES.txt"
LOGGED="FILES.version"

def PrettyLog(title, log):
	print("%s: %s" %(title, log))

def join(base, suffix):
	fullPath = base+suffix
	return str(fullPath)

def get(url):
	raw = requests.get(url)
	if raw.status_code==200:
		return raw
	else:
		return raw.status_code
		exit()

def hsfetch():
	raw = get(join(BASE, FILES))
	if raw.status_code==200:
		hash256=hashlib.sha256(raw.text).hexdigest()
		# PrettyLog('Sha256Sum || Github', hash256)
		return hash256
	else:
		return raw.status_code

def hslocal():
	raw = open(FILES, 'r')
	hash256=hashlib.sha256(raw.read()).hexdigest()
	raw.flush()
	raw.close()
	# PrettyLog('Sha256Sum || Local', hash256)
	return hash256

def hsgitfetch():
	raw = get(join(BASE, LOGGED))
	if raw.status_code==200:
		hash256=raw.text.split(":")[0]
		version=raw.text.split(":")[1]
		# PrettyLog('Sha256Sum || Logged || GH', hash256)
		# PrettyLog('Sha256Sum || Version || GH', version)
		return hash256, version
	else:
		return raw.status_code
	
def hsLoggedLocal():
	raw = open(LOGGED, 'r')
	readRaw = raw.read()
	hash256 = readRaw.split(":")[0]
	version = readRaw.split(":")[1]
	# PrettyLog('Sha256Sum || Logged || Local', hash256)
	# PrettyLog('Sha256Sum || Version || Local', version)
	return hash256, version
	
def match():
	gitHash=hsfetch()
	localHash=hslocal()
	loggedHashLocal=hsLoggedLocal()[0]
	loggedVersionLocal=hsLoggedLocal()[1]
	loggedHashGit=hsgitfetch()[0]
	loggedVersionGit=hsgitfetch()[1]

	dump={"Sha256Git": gitHash,
		  "Sha256Local":localHash,
		  "Sha256GitLogged":loggedHashGit,
		  "Sha256LocalLogged": loggedHashLocal,
		  "VersionGit": loggedVersionGit,
		  "VersionLocal": loggedVersionLocal}

	json_dump= json.dumps(dump, indent=4)

	return json_dump


if __name__ == '__main__':
	data = json.loads(match())
	match =all((data['Sha256Git'] in data['Sha256Local'], data['Sha256GitLogged'] in data['Sha256LocalLogged']))
	if match:
		print "Up-to-date...all is good"
	else:
		print "There is a mismatch..."
		print json.dumps(data, indent=4)