import { useEffect, useRef } from "react";
import { Search } from "lucide-react";

import SearchResults from "./SearchResults";
import "./ForumSearch.css";

function ForumSearch({
  search,
  setSearch,
  posts,
}) {

  const wrapperRef = useRef(null);

  const showResults = search.trim() !== "";

  useEffect(() => {

    function handleClickOutside(event){

      if(
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ){

        setSearch("");

      }

    }

    document.addEventListener("mousedown",handleClickOutside);

    return ()=>{

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  },[setSearch]);

  return(

    <div className="forum-search">

      <div
        className="search-wrapper"
        ref={wrapperRef}
      >

        <div
          className={`search-box ${
            showResults ? "active" : ""
          }`}
        >

          <Search size={20}/>

          <input
            type="text"
            placeholder="Search discussions..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        <SearchResults
          posts={posts}
          search={search}
        />

      </div>

    </div>

  );

}

export default ForumSearch;