// ReactQL Hacker News GraphQL example

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";


/* Local */

// Query to get top stories from HackerNews
import { GetHackerNewsTopStoriesComponent } from "App/db/graphql";

// ----------------------------------------------------------------------------


// Execute the GraphQL query. With SSR, the server will await the returned
// result before rendering out the initial HTML. On the browser, it will re-use
// whatever the server has sent it - or, if it's a client-navigated route that
// doesn't already have data from the server -- it'll display a loading message
// while the data is being retrieved
export const HackerNews: React.FunctionComponent = () => (
  <GetHackerNewsTopStoriesComponent>
    {({ data, loading, error }) => {
      // Any errors? Say so!
      if (error) {
        return <h1>Error retrieving news stories! &mdash; {error}</h1>;
      }

      // If the data is still loading, return with a basic
      // message to alert the user
      if (loading) {
        return <h1>Loading Hacker News stories...</h1>;
      }

      // Otherwise, we have data to work with... map over it with a
      // bullet-point list
      return (
        <>
          <h3>Top stories from Hacker News</h3>
          <div>
            {data!.hn!.topStories!.map(story => (
              <div key={story!.id!}>
                <a href={story!.url!} target="_blank">
                  {story!.title}
                </a>
              </div>
            ))}
          </div>
        </>
      );
    }}
  </GetHackerNewsTopStoriesComponent>
);
