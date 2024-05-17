/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const dummyQuery = /* GraphQL */ `query DummyQuery {
  dummyQuery
}
` as GeneratedQuery<APITypes.DummyQueryQueryVariables, APITypes.DummyQueryQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    user_id
    content
    tags
    created
    updated
    longitude
    latitude
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMessageQueryVariables, APITypes.GetMessageQuery>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user_id
      content
      tags
      created
      updated
      longitude
      latitude
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMessagesQueryVariables, APITypes.ListMessagesQuery>;
