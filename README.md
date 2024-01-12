# project-notes

- Two types of components.
  - Standard components (SC) that are pre made by dev team
  - Custom components (CC) made by the user.

## Custom Components Concept

- User uses UI to create CC.
- CC details (ie params) are stored in .json file for now, later written to database.
- CC are "disposable" ... they are so easy to make there is no need to edit them. Destroy and make a new one.
- CC has the following properties:
  - Name: User defined name. Probably limit character amount.... does not need to be unique.
  - Unique ID: UUID
  - Created By: Value will be either "system" (used in SC) and will be the logged in users name or id or something. This value will be used when loading in the users dashboard.
  - Data Source: Data Source (right now) is in json file with name, id, and url.... the idea is this will point back to that information on where the components data is to come from.
  - Display Type: (This name sucks) Predetermined component such as bar chart, data table, pie chart...etc... This is essentially the container and format to display the data from the data source.

### POSSIBLE OTHER PROPERTIES: Unsure if these are needed or should be included.

- Background Color
- Text Color
- Font Size
- Height
- Width
- The values of these properties are defaulted to the current theme... allowing the user to set custom background, text colors could certainly be of value.... I think.... Other options such as shadow and border colors and sizes could also be set to override the defaults if desired....

  - ⚠️ However.... there would need to be a "default" type value... currently the value for each is whatever the theme is at the time. When that is written to the json file that data is static... there has to be a way for the render engine to know which ones should defer to the theme and which ones should use the static values/
