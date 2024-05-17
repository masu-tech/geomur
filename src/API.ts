/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null;
  user_id: string;
  content: string;
  tags?: Array<string | null> | null;
  created: string;
  updated: string;
  longitude: number;
  latitude: number;
};

export type ModelMessageConditionInput = {
  user_id?: ModelStringInput | null;
  content?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  created?: ModelStringInput | null;
  updated?: ModelStringInput | null;
  longitude?: ModelFloatInput | null;
  latitude?: ModelFloatInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Message = {
  __typename: 'Message';
  id: string;
  user_id: string;
  content: string;
  tags?: Array<string | null> | null;
  created: string;
  updated: string;
  longitude: number;
  latitude: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageInput = {
  id: string;
  user_id?: string | null;
  content?: string | null;
  tags?: Array<string | null> | null;
  created?: string | null;
  updated?: string | null;
  longitude?: number | null;
  latitude?: number | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  content?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  created?: ModelStringInput | null;
  updated?: ModelStringInput | null;
  longitude?: ModelFloatInput | null;
  latitude?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelMessageConnection = {
  __typename: 'ModelMessageConnection';
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  user_id?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  created?: ModelSubscriptionStringInput | null;
  updated?: ModelSubscriptionStringInput | null;
  longitude?: ModelSubscriptionFloatInput | null;
  latitude?: ModelSubscriptionFloatInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type DummyMutationMutationVariables = {};

export type DummyMutationMutation = {
  dummyMutation?: string | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DummyQueryQueryVariables = {};

export type DummyQueryQuery = {
  dummyQuery?: string | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages?: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      user_id: string;
      content: string;
      tags?: Array<string | null> | null;
      created: string;
      updated: string;
      longitude: number;
      latitude: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type DummySubscriptionSubscriptionVariables = {};

export type DummySubscriptionSubscription = {
  dummySubscription?: string | null;
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnCreateMessageSubscription = {
  onCreateMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?: {
    __typename: 'Message';
    id: string;
    user_id: string;
    content: string;
    tags?: Array<string | null> | null;
    created: string;
    updated: string;
    longitude: number;
    latitude: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};
