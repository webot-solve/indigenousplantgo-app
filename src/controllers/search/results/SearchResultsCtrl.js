import React, { useState, useEffect } from "react";
import SearchResults from "../../../components/search/results";

export default function SearchResultsCtrl({ resourceType }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const syncQuery = (string) => {
    setSearchQuery(string);
  };

  return <SearchResults setter={syncQuery} />;
}
