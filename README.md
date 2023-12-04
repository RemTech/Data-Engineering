## *Dependencies* ##
------------------

> 1. `Parcel` is a build tool && `cubejs` is for fetching / connecting the datasource for visualisation.
> 2. `Chartjs` is for presenting the data in graphs

 ### *type Cube properties* ###
 ----------------------------
   - name: `string`;
   - title: `string`;
   -  description?: `string | undefined`;
   - measures: `TCubeMeasure[]`;
   - dimensions: `TCubeDimension[]`;
   - segments: `TCubeSegment[]`;
   - connectedComponent?: `number | undefined`;
   - type?:` "view" | "cube" | undefined`;
   - isVisible?: `boolean | undefined`;
   - public?: `boolean | undefined`;
 
 ## *==To Run The Application==* ##
 ----------------------------------
 1. Clone this repository typing `git clone <repository-name>` on your command.
 2. Run `npm run build` to install the dependencies and build the application.
 3. Start `docker engine` on your system / computer to enable to `postgres` database in the application function.
 4. Type `npm run production` on your command line to start the postgres DB docker instance and launch the application.
 5. Navigate to your browser and enter `localhost:1234/localquery` to navigate to the postgres DB query analysis page
 