# indigenous-plant-go-app

BCIT | Sustainability Programming II: Indigenous Plant Go

## Install Instructions

**Prerequisites**

- [Expo CLI](https://docs.expo.io/workflow/expo-cli/) (Install Globally)
- Node 12 LTS or higher
- Node Package Manager (NPM)

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
