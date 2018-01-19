from flask import Flask, jsonify
import pylab as pl
import os
import json
import sys
try:
    import urllib2 as urllib
except ImportError:
    import urllib.request as urllib

app = Flask(__name__)

url = 'https://s3.amazonaws.com/argodata/dummy.json'
response = urllib.urlopen(url)
data = response.read().decode("utf-8")
doc = json.loads(data)

@app.route("/", methods=['GET'])
def crosswalk():
    return jsonify({'crosswalk': doc})


if __name__ == '__main__':
    app.run(debug=True)