# Indigenous Plant Go

Indigenous Plant Go is a mobile application that allows BCIT Students to explore the BCIT Burnaby campus and discover plants, and points-of-interests that have significance in the indigenous culture.

**Table Of Contents**

1. [Core Application Features](#core-application-features)
2. [Road-mapped Features](#road-mapped-features)
3. [Technology Stack](#technology-stack)
4. [Wireframes](#wireframes)
5. [Installation Documents](#installation)
6. [Developer Notes](#developer-notes)

### Mobile Application (Client)

This specific repository houses the user-facing mobile application. The mobile application's core feature is the map view.

The map view will allow users to navigate through BCIT's burnaby campus to identify plants and waypoints that have cultural significance in the indigenous community. The experience will rely on custom markers, and a "way-finding" feature that draws poly-lines from the user's current location to any custom marker.

#### Core Application Features

- An interactive map with custom plant, and waypoint markers.
- Seven mobile screens:
  1. Landing
  2. Plant List (Map View)
  3. Plant Detail + Map View
  4. Plant Search
  5. Waypoint List (Map View)
  6. Waypoint Detail + Map View
  7. Waypoint Search
- User's current location and direction is rendered on each map view.
- The mobile application consumes a REST API for all the plant, and waypoint data. API Documentation can be found in the [server-side repository](https://github.com/BCITConstruction/indigenousplantgo-cms-server)

#### Road-mapped Features

- "Wayfinding" - will allow the user to select any custom marker, and the system will draw a polyline or path way from the user's current location, to the selected marker.
- Apply more prominent visual "branding" across all the screens
- Styling enhancements on the Android version
- Deploy to google play store (Android)
- Deploy to app store (iOS)

### Technology Stack

- Client: ReactJS
- Deployment: TBD

### Wireframes

#### Home

<img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/home.png" width="250" alt="home wireframe">

#### Plant List, Detail & Search

<img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/plant__list.png" width="250" alt="plant list wireframe"><img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/plant__detail.png" width="250" alt="plant detail wireframe"><img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/plant__search.png" width="250" alt="plant search wireframe">

#### Waypoint List, Detail & Search

<img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/waypoint__list.png" width="250" alt="waypoint list wireframe"><img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/waypoint__detail.png" width="250" alt="waypoint detail wireframe"><img src="https://raw.githubusercontent.com/BCIT-SSD-2020-21/indigenous-plant-go-cms/main/planning/client/appwireframes/waypoint__search.png" width="250" alt="waypoint search wireframe">

### Installation Documentation

**Prerequisites**

- [Expo CLI](https://docs.expo.io/workflow/expo-cli/) (Install Globally)
- Node 12 LTS or higher
- Node Package Manager (NPM)
- Android Emulator / iOS Simulator is installed

**General Install**

1. Clone this repository to your local machine.

```
git clone https://github.com/BCIT-SSD-2020-21/indigenous-plant-go-app.git <PATH-TO-YOUR-LOCAL-REPO>
```

2. Change directory into the root folder of your newly cloned repo

```
cd <PATH-TO-YOUR-LOCAL-REPO>
```

3. Rename ./config-sample.json to ./config.json, and input your api end-point. This url is the production api's base end-point. Please see [server-side repository](https://github.com/BCITConstruction/indigenousplantgo-cms-server) for API documentation.

```
{
  "API": {
    "BASE_URL": <YOUR_API_END_POINT>
  }
}
```

4. Install node dependencies from the root folder

```
npm install
```

5. Run Expo CLI from the root folder

```
expo start
```

6. Start an Android or iOS simulator

```
Happy hacking!
```

### Developer Notes

**Considerations**

- The ability to draw poly-lines may be more managable using Open Street Maps (OSM) as the map provider instead of Google. [Documents](https://www.igismap.com/switching-between-google-maps-and-openstreetmap-in-react-native/)
- For launching to the apple store, we recommend that a software developer investigates the requirements to launch the app in ["test flight mode"](https://developer.apple.com/testflight/)
- Once the issues with Android (listed below under "known issues") have been addressed, we recommend that a software developer investigate the requirements to launch a "hidden" android app to the google play store. This can be done by publishing the app in "closed beta testing" mode.

**Current Location**  
In development mode, the current location is set to BCIT's location. This setting can be turned off in `./src/controllers/map/MapCtrl.js`.

Change `const stage = "development"` to `const stage = "staging"`

**Google API Key**  
Although the `react-native-maps` [install documentation](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md) specifies that we must include the Google API Key, we did not include the API key in `AppDelegate.m`(iOS) or in `AndroidManifest.xml`(Android). [stack exchange](https://gamedev.stackexchange.com/questions/131626/how-do-i-create-a-closed-beta-on-google-play)

The maps still renders, and functions as expected, although we are not sure why. Perhaps this is because we aren't requesting extensive Google Maps data.

**Known Issues**

- ANDROID build sometimes crashes when navigating between screens
- ANDROID map markers are mal-positioned (X, and Y axis are off.)

**Troubleshooting Android Emulators**  
If the android simulator is crashing on navigation to a map screen, please ensure that the AVD's boot setting is set to "**cold boot**"

<img width="350" src="https://i.imgur.com/kSFAwD0.png"/>
