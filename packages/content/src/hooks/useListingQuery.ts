import { graphql, useStaticQuery } from 'gatsby';
import { PostsQueryData } from '../interfaces/PostsQuery.interface';

export const useListingQuery = () => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
    query LISTING_QUERY {
      allMdx {
        edges {
          node {
            excerpt
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  return { allMdx };
};
