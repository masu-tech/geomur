/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const dummySubscription = /* GraphQL */ `subscription DummySubscription {
  dummySubscription
}
` as GeneratedSubscription<
  APITypes.DummySubscriptionSubscriptionVariables,
  APITypes.DummySubscriptionSubscription
>;
export const onCreateMessage =
  /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateMessageSubscriptionVariables,
    APITypes.OnCreateMessageSubscription
  >;
export const onUpdateMessage =
  /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateMessageSubscriptionVariables,
    APITypes.OnUpdateMessageSubscription
  >;
export const onDeleteMessage =
  /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteMessageSubscriptionVariables,
    APITypes.OnDeleteMessageSubscription
  >;
