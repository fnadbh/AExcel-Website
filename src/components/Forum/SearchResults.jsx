import "./SearchResults.css";
import { User } from "lucide-react";

function SearchResults({
  posts,
  search,
}){

  if(search.trim()==="") return null;

  return(

    <div className="search-results">

      {

        posts.length===0?

        (

          <div className="search-empty">

            No discussions found.

          </div>

        )

        :

        <>

          <div className="search-count">

            {posts.length} result
            {posts.length!==1 && "s"}

          </div>

          {

            posts.slice(0,5).map(post=>(

              <div
                className="search-item"
                key={post.id}
              >

                <div className="search-avatar">

                  <User size={18}/>

                </div>

                <div className="search-content">

                  <h4>{post.title}</h4>

                  <span>

                    {post.author}
                    {" • "}
                    {post.faculty}

                  </span>

                </div>

              </div>

            ))

          }

        </>

      }

    </div>

  );

}

export default SearchResults;