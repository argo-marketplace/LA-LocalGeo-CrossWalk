# LA-LocalGeo-CrossWalk
A single file that links up all the local geographies in LA County. See [here for an example in NYC from @vr00n](https://github.com/vr00n/NYC-LocalGeo-CrossWalk)

A preliminary timeline for the project is shown below:

| Original Timeline | Deliverable |
| ------------- | ------------- |
| Week of 12/22/17 | Kickoff meeting |
| Week of 12/29/17 | [List of local geographies (LA County vs. NYC)](https://docs.google.com/spreadsheets/d/1knENEZA57BtFOr489FJA3yA8folo-5lYsNi-qiRsR74/edit#gid=0)<br>[Intersection demo](https://github.com/argo-marketplace/LA-LocalGeo-CrossWalk/blob/master/Week1_deliverable.ipynb) |
| ...| ... |
| 1/X/18 | Launch! |

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

## What is LA-LocalGeo-Crosswalk?

The objective of this project is to create a single GIS file that  links up the following geographies. The streth goal is to then create an API that allows anyone to query some point in LA County and retrieve all the local geographies that the point falls in. Example any point in LA county can belong to

- City boundaries
- Census Blocks 2010
- Census Tracts 2010
- City Council Districts
- Community Districts
- County Supervisorial Seats
- Fire stations
- Health Area
- Municipal Court Districts
- Neighborhood Tabulation Areas
- Police Precincts
- PUMA
- Retail Water Districts
- School Districts
- State Assembly Districts
- State Senate Districts
- U.S. Congressional Districts
- Wholesale water districts (member agencies of Metropolitan Water District)

## How will we get this done?

- [LA County GIS portal](https://egis3.lacounty.gov/dataportal/data-catalog/)

- [The SCAG GIS Services](http://gisdata.scag.ca.gov/Pages/GIS-Library.aspx) should provide the most comprehensive inventory of boundaries.

## How can I ask questions
- Open an Issue on Github
- Reach out to ARGO team lead: Varun Adibhatla ( varun@argolabs.org )
