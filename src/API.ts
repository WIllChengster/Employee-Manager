/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
};

export type ModelEmployeeConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateEmployeeInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateSkillsInput = {
  id?: string | null,
  name: string,
};

export type ModelSkillsConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillsConditionInput | null > | null,
  or?: Array< ModelSkillsConditionInput | null > | null,
  not?: ModelSkillsConditionInput | null,
};

export type UpdateSkillsInput = {
  id: string,
  name?: string | null,
};

export type DeleteSkillsInput = {
  id?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSkillsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSkillsFilterInput | null > | null,
  or?: Array< ModelSkillsFilterInput | null > | null,
  not?: ModelSkillsFilterInput | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillsMutationVariables = {
  input: CreateSkillsInput,
  condition?: ModelSkillsConditionInput | null,
};

export type CreateSkillsMutation = {
  createSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillsMutationVariables = {
  input: UpdateSkillsInput,
  condition?: ModelSkillsConditionInput | null,
};

export type UpdateSkillsMutation = {
  updateSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillsMutationVariables = {
  input: DeleteSkillsInput,
  condition?: ModelSkillsConditionInput | null,
};

export type DeleteSkillsMutation = {
  deleteSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  Array< {
        __typename: "Skills",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSkillsQueryVariables = {
  id: string,
};

export type GetSkillsQuery = {
  getSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillssQueryVariables = {
  filter?: ModelSkillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillssQuery = {
  listSkillss:  {
    __typename: "ModelSkillsConnection",
    items:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    id: string,
    firstname: string,
    lastname: string,
    skills:  Array< {
      __typename: "Skills",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillsSubscription = {
  onCreateSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillsSubscription = {
  onUpdateSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillsSubscription = {
  onDeleteSkills:  {
    __typename: "Skills",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
