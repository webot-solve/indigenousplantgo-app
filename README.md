# indigenous-plant-go-app

BCIT | Sustainability Programming II: Indigenous Plant Go

## Install Instructions

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

3. Rename ./config-sample.json to ./config.json, and input your api end-point.

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

**Current Location**
In development mode, the current location is set to BCIT's location. This setting can be turned off in `./src/controllers/map/MapCtrl.js`.

Change `const stage = "development"` to `const stage = "staging"`

**Google API Key**
Although the `react-native-maps` [install documentation](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md) specifies that we must include the Google API Key, we did not include the API key in `AppDelegate.m`(iOS) or in `AndroidManifest.xml`(Android).

The maps still renders, and functions as expected, although we are not sure why. Perhaps this is because we aren't requesting extensive Google Maps data.

**Known Issues**

- ANDROID build sometimes crashes when navigating between screens
- ANDROID map markers are mal-positioned (X, and Y axis are off.)

**Troubleshooting Android Emulators**
If the android simulator is crashing on navigation to a map screen, please ensure that the AVD's boot setting is set to "**cold boot**"

<img width="350" src="https://i.imgur.com/kSFAwD0.png"/>
