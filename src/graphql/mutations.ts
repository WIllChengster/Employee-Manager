/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      skills {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      skills {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      skills {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSkills = /* GraphQL */ `
  mutation CreateSkills(
    $input: CreateSkillsInput!
    $condition: ModelSkillsConditionInput
  ) {
    createSkills(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSkills = /* GraphQL */ `
  mutation UpdateSkills(
    $input: UpdateSkillsInput!
    $condition: ModelSkillsConditionInput
  ) {
    updateSkills(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkills = /* GraphQL */ `
  mutation DeleteSkills(
    $input: DeleteSkillsInput!
    $condition: ModelSkillsConditionInput
  ) {
    deleteSkills(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
