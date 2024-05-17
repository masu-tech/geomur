/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const dummyMutation = /* GraphQL */ `mutation DummyMutation {
  dummyMutation
}
` as GeneratedMutation<APITypes.DummyMutationMutationVariables, APITypes.DummyMutationMutation>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateMessageMutationVariables, APITypes.CreateMessageMutation>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateMessageMutationVariables, APITypes.UpdateMessageMutation>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteMessageMutationVariables, APITypes.DeleteMessageMutation>;
