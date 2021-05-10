import React, { useState, useEffect } from "react";
import SearchInput from "../../../components/search/input";

export default function SearchInputCtrl({ setter }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setter(searchQuery);
  }, [searchQuery]);

  return (
    <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  );
}
