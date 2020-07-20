from bs4 import BeautifulSoup
import urllib2
import time
import os


# ts download https://translate.sailfishos.org/download/en_GB/ambience-aloe/ambience-aloe.ts
BASE_URL = "https://translate.sailfishos.org/download/ar"
COMPT_NAME_URL = "https://translate.sailfishos.org/ar/"
#https://translate.sailfishos.org/en_GB/eventsview-extensions/
FILES_URL = "https://translate.sailfishos.org/ar/" 
FOLDER_NAMES = []
FILES_LIST = []
DOWNLOADS = []



def fetchHtml(url):

	html = urllib2.urlopen(url)
	html_store = html.read()

	return html_store

def findAttr(html, list):

	s = BeautifulSoup(html, 'html.parser')
	for i in s.find_all('td', attrs={'class': 'stats-name'})[0:93]:
		list.append("".join(i.text.strip()))

	return


def folderNamesScrap(html_store):

	findAttr(html_store, FOLDER_NAMES)

	return 

def fileListScrap(html_store):

	findAttr(html_store, FILES_LIST)

	return

def getFiles():

	for i in FILES_LIST:
		path = "%s/%s/%s.ts" %(BASE_URL,i,i)
		DOWNLOADS.append(path)

	return

def createFolders():

	cd = os.getcwd()
	html = fetchHtml(COMPT_NAME_URL)
	folderNamesScrap(html)
	try:
		for i in FOLDER_NAMES:
			folderName = "%s/%s" %(cd, i)
			#print folderName
			os.mkdir(folderName)
			print "Created [%s]" %i
	except:
		pass

	return

def generateDownloadLinks():
	a = 0
	cd = os.getcwd()
	html = fetchHtml(COMPT_NAME_URL)
	for i in FOLDER_NAMES:
		url = FILES_URL + i
		html = fetchHtml(url)
		s = BeautifulSoup(html, 'html.parser')
		for j in s.find_all('td', attrs={'class': 'stats-name'})[0:93]:
			toDownload = "%s/%s/%s" %(BASE_URL, i, "".join(j.text.strip()))
			DOWNLOADS.append(toDownload)
		#a += 1
		# Be Respectful
		#print "Sleeping for 3 seconds\n\n"
		#print a
		#time.sleep(3)
	g = open(os.getcwd()+"/links.txt", 'w+')
	for i in DOWNLOADS:
		g.write(i)
	g.close()
	

if __name__ == '__main__':

	createFolders()
	generateDownloadLinks()
	
	for i in DOWNLOADS:

		try:
			ts = urllib2.urlopen(i)
			tsWrite = ts.read()
			path = "%s/%s" %(os.getcwd()+"/"+i.split('/')[5], i.split('/')[6])
			print "Downloading %s" %i
			with open(path, 'wb') as f:
				f.write(tsWrite)
			f.close()
			print "Download Complete \n --> %s" %path
			#print "Sleeping for 5 seconds"
			#time.sleep(5)
		except:
			print "passing on %s" %i
			pass





