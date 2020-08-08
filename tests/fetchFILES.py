import requests
import hashlib


def hsfetch():
	raw = requests.get("https://raw.githubusercontent.com/Logic-gate/unofficial-jolla-language-pack-ar/master/tests/FILES.txt")
	if raw.status_code==200:
		hash256=hashlib.sha256(raw.text).hexdigest()
		return hash256
	else:
		return raw.status_code

def hslocal():
	FILES = "FILES.txt"
	raw = open(FILES, 'r')
	hash256=hashlib.sha256(raw.read()).hexdigest()
	raw.flush()
	raw.close()
	return hash256

def hsLoggedLocal():
	logged = "FILES.version"
	raw = open(logged, 'r')
	readRaw = raw.read()
	hash256 = readRaw.split(":")[0]
	version = readRaw.split(":")[1]
	return hash256, version

def match():
	git=hsfetch()
	local=hslocal()
	loggedHash=hsLoggedLocal()[0]
	version=hsLoggedLocal()[1]

	if git == local and git == loggedHash:
		print "Match"


if __name__ == '__main__':
	match()

