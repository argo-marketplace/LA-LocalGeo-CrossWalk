## Steps to create an API using Flask

- Since we have our data in csv, convert the csv data to json using [this code](https://localhost:8000/user/gb1877/notebooks/homedirs/gb1877/LA_Crosswalk/LA-LocalGeo-CrossWalk/api.ipynb)

- I uploaded the data to AWS so it would be easy to extract whenever required.

- Next we need to create a script for Flask to read the json data and host the data on local server. I created a [super simple script](https://localhost:8000/user/gb1877/edit/homedirs/gb1877/LA_Crosswalk/LA-LocalGeo-CrossWalk/API/app.py#) that would work with our data. 

- Once we have our script ready, we need to go to terminal and run the script and log on to the localserver http://localhost:5000/

- We can then query the data so extract subset of the result.