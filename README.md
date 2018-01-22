# LA-LocalGeo-CrossWalk
A single file that links up all the local geographies in LA County.

## What is LA-LocalGeo-Crosswalk?
A single GIS file that links up the following geographies. Utilizing the API we created allows anyone to query some point in LA County and retrieve all the local geographies that the point falls in. Example any point in LA county can belong to

- Law Enforcement Reporting Districts
- La County Communities
- Registrar Recorder Precincts
- Congressional Districts
- State Senate Districts
- State Assembly Districts
- 2011 Supervisorial Districts
- Area Names
- 2010 Census Tracts
- 2010 Block Groups
- 2010 Census Blocks
- Federal Information Processing Standard Numbers
- City Name
- Postal Code
- Public Use Microdata Areas (PUMA)
- Health Districts

This Geo-CrossWalk shares the same idea as the [Relationship Files by US Census Bureau](https://www.census.gov/geo/maps-data/data/relationship.html). The difference is that we also want to build an API for instantly "query and answer" on this relationship file.

## Why do we need this?
This dataset could help answer questions like this more easily while also reducing the overall friction to integrate data from disparate domains.

    How many and which Census Tracts are located in LAUSD District X?
    AND
    Which Fire District is serviced by this School District?
    AND
    Which City Council District is this School District in?
    AND
    Which Congressional District is it in?
    AND
    How many Health Centers are in this area?

## How can we use this Geo-CrossWalk?
- [Download the file (.csv format)](https://drive.google.com/file/d/1yaRMp1azgGNlv1EKMMUXXEALfReRfz_7/view?usp=sharing)
- [Download the file (Shapefile format)](https://drive.google.com/file/d/1c3Ja2jkVFN8kRq5ANPyTovyZZlwEBrd5/view?usp=sharing)
- [Query the API]()

## Where are the original data coming from?
- [LA County GIS portal](https://egis3.lacounty.gov/dataportal/data-catalog/).
- [The SCAG GIS Services](http://gisdata.scag.ca.gov/Pages/GIS-Library.aspx).

## How we got this done?
#### Produce the GIS file:
- For now, [using ArcGIS](https://github.com/argo-marketplace/LA-LocalGeo-CrossWalk/issues/13) is the most robust and direct approach. See how we [build the geo-crosswalk using ArcGIS](https://github.com/argo-marketplace/LA-LocalGeo-CrossWalk/blob/master/CreateGeocrosswalkbyArcgis.md).
- Here provides an alternative solution [using geopandas](https://github.com/argo-marketplace/LA-LocalGeo-CrossWalk/blob/master/The%20intersection%20utilized%20GeoPandas.ipynb).
#### Create the API:
- Work ongoing...


## For more references:
See [here for an example in NYC from @vr00n](https://github.com/vr00n/NYC-LocalGeo-CrossWalk)
