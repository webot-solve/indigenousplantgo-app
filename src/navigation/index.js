import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Icons
import { CompassActive, CompassDefault } from "../icons/Compass";
import { PlantActive, PlantDefault } from "../icons/Plant";
import { HomeActive, HomeDefault } from "../icons/Home";

// Screens - PLANTS
import ListPlants from "../screens/List/ListPlants";
import DetailPlant from "../screens/Detail/DetailPlant";

// Screens - WAYPOINTS
import ListWaypoints from "../screens/List/ListWaypoints";
import DetailWaypoint from "../screens/Detail/DetailWaypoint";

// Screens - HOME
import Home from "../screens/Home/Home";

// Navigation Stacks
const BottomTab = createMaterialBottomTabNavigator();
const ScreenStack = createStackNavigator();

// Navigation Options
const navOptions = {
  headerStyle: {
    backgroundColor: "#f7f7f7",
    elevation: 0,
    shadowColor: "#cecece",
  },
  headerTintColor: "#ccc",
  headerTitleStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
  },
};

function PlantScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="List Plants"
        component={ListPlants}
        options={{
          headerTitle: "Plants",
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="Plant Detail"
        component={DetailPlant}
        options={{
          headerTitle: "Plant",
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function WaypointScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="List Waypoints"
        component={ListWaypoints}
        options={{
          headerTitle: "Waypoints",
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="Waypoint Detail"
        component={DetailWaypoint}
        options={{
          headerTitle: "Waypoint",
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function HomeScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Home Page"
        component={Home}
        options={{
          headerTitle: "Home",
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

export default function Index() {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: "#f7f7f7",
        paddingBottom: 5,
        paddingTop: 5,
        borderTopColor: "#ccc",
        borderWidth: 1,
      }}
      activeColor="mediumseagreen"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <HomeActive /> : <HomeDefault />}</>
          ),
        }}
      />
      <BottomTab.Screen
        name="Plants"
        component={PlantScreenNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <PlantActive /> : <PlantDefault />}</>
          ),
        }}
      />
      <BottomTab.Screen
        name="Waypoints"
        component={WaypointScreenNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <CompassActive /> : <CompassDefault />}</>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
