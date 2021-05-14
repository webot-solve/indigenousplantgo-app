import React, { useState, useEffect } from "react";
import SearchResults from "../../../components/search/results";
import { getAllWaypoints, getAllPlants } from "../../../network";

export default function SearchResultsCtrl({ resourceType, navigation }) {
  let isMounted = true;
  const [searchQuery, setSearchQuery] = useState("");
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    isMounted = true;
    queryResources();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    filterResources();
  }, [searchQuery]);

  const syncQuery = (string) => {
    setSearchQuery(string);
  };

  const queryResources = async () => {
    if (!isMounted) return;
    let result;
    switch (resourceType) {
      case "plants":
        result = await getAllPlants();
        break;
      case "waypoints":
        result = await getAllWaypoints();
        break;
      default:
        break;
    }

    if (result.error) return console.log("Error fetching resources");
    if (isMounted) setResources(result);
    if (isMounted) setFilteredResources(result);
  };

  const filterResources = () => {
    const query = searchQuery.toLowerCase();
    if (query === "" || query === undefined || query === null)
      return setFilteredResources(resources);
    let filteredData = [];
    let filteredIds = [];

    const filterId = () => {
      filteredIds = filteredData.map((resrc) => resrc._id);
    };

    resources.forEach((resource) => {
      const categories = resource.categories;
      const tags = resource.tags;

      switch (resourceType) {
        case "plants":
          if (filteredIds.includes(resource._id)) break;
          if (resource.plant_name.toLowerCase().startsWith(`${query}`))
            filteredData = [...filteredData, resource];
          filterId();
          break;
        case "waypoints":
          if (filteredIds.includes(resource._id)) break;
          if (resource.waypoint_name.toLowerCase().startsWith(`${query}`))
            filteredData = [...filteredData, resource];
          filterId();
          break;
        default:
          break;
      }

      categories.forEach((category) => {
        if (
          filteredIds.includes(resource._id) ||
          typeof category.category_name !== "string"
        )
          return;
        if (category.category_name.toLowerCase().startsWith(`${query}`))
          filteredData = [...filteredData, resource];
        filterId();
      });

      tags.forEach((tag) => {
        if (
          filteredIds.includes(resource._id) ||
          typeof tag.tag_name !== "string"
        )
          return;
        if (tag.tag_name.toLowerCase().startsWith(`${query}`))
          filteredData = [...filteredData, resource];
        filterId();
      });

      if (isMounted) setFilteredResources(filteredData);
    });
  };

  const showDetail = (id) => {
    if (!id) return;
    let foundResource = resources.filter((resource) => resource._id === id)[0];
    if (!foundResource) return;

    switch (resourceType) {
      case "plants":
        navigation.navigate("Plant Detail", foundResource);
        break;
      case "waypoints":
        navigation.navigate("Waypoint Detail", foundResource);
        break;
      default:
        break;
    }
  };

  return (
    <SearchResults
      setter={syncQuery}
      filteredResources={filteredResources}
      resourceType={resourceType}
      showDetail={showDetail}
    />
  );
}
