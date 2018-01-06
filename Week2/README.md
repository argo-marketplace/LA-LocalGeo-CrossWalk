# Note for Week 2
We inspected 20 geometries in total.
Among these 20 datasets, files 'Registrar Recorder Precincts' and 'Census Blocks' are
geo-crosswalk type of datasets.
- [Registrar Recorder Precincts](https://egis3.lacounty.gov/dataportal/2012/12/20/2012-precincts-as-of-march-9th/)
- [Census Block](http://egis3.lacounty.gov/dataportal/2016/01/26/census_blocks/)

File 'Registrar Recorder Precincts' covered information of:
- [US Congressional Districts](http://egis3.lacounty.gov/dataportal/2010/01/14/us-congressional-districts/)
- [California State Senate Districts (2011)](http://egis3.lacounty.gov/dataportal/2011/11/08/california-state-senate-districts-2011/)
- [State Assembly Districts (State Legislative District – Lower Chamber)](http://egis3.lacounty.gov/dataportal/2011/11/08/california-state-assembly-districts-2011/)

File 'Census Blocks' covered information of:
- [Census Tract](http://egis3.lacounty.gov/dataportal/2016/01/26/census_tracts/)
- [2011 Supervisorial District Boundaries (Official)](http://egis3.lacounty.gov/dataportal/2011/12/06/supervisorial-districts/)
- [Public Use Microdata Areas (PUMA)](https://www2.census.gov/geo/tiger/GENZ2016/shp/)
- [ZIP Code Boundaries](https://egis3.lacounty.gov/dataportal/2016/08/11/zip-codes-with-parcel-specific-boundaries/)
- [Health Districts (HD) – 2012](http://egis3.lacounty.gov/dataportal/2012/03/01/health-districts-hd-2012/)

We excluded datasets that have been covered in files 'Registrar Recorder Precincts' and 'Census Blocks'.

Some geometries are subset of LA County, but geopandas 'sjoin', 'overlay(how='union')', and 'spatial_overlays(how='union')' are not working well for now. So datasets that
are subset of LA County haven't been included in this version.
Those datasets are:
- [Split 2010 Block Group/City – Community Statistical Area (formerly BASA)](https://egis3.lacounty.gov/dataportal/2016/01/18/split-2010-block-groupcity-basa/)
- [Town Council / Community Group](https://egis3.lacounty.gov/dataportal/2014/12/29/town-council-areas/)
- [Los Angeles County Fire Department Division Boundaries](http://egis3.lacounty.gov/dataportal/2016/04/28/los-angeles-county-fire-department-division-boundaties/)
- [Los Angeles County Fire Department Battalion Boundaries](http://egis3.lacounty.gov/dataportal/2016/04/28/los-angeles-county-fire-department-battalion-boundaries/)
- [LA City Council Districts (2012)](http://egis3.lacounty.gov/dataportal/2012/08/07/la-city-council-districts-2012/)
- [Comunity Plan Areas](http://egis3.lacounty.gov/dataportal/2015/09/21/la-city-communities-and-planning-areas/)
- [CDC Project Areas](https://egis3.lacounty.gov/dataportal/2015/06/09/cdc-project-areas/)
