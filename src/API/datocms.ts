import { GraphQLClient } from "graphql-request";

interface requestProps {
  query: any;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}
const API_URL = "https://graphql.datocms.com";
export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: requestProps) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient(API_URL, { headers });
  return client.request(query, variables);
}
