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

export type CreateEmployeeSkillInput = {
  id?: string | null,
  employeeSkillEmployeeId: string,
  employeeSkillSkillId: string,
};

export type ModelEmployeeSkillConditionInput = {
  and?: Array< ModelEmployeeSkillConditionInput | null > | null,
  or?: Array< ModelEmployeeSkillConditionInput | null > | null,
  not?: ModelEmployeeSkillConditionInput | null,
};

export type UpdateEmployeeSkillInput = {
  id: string,
  employeeSkillEmployeeId?: string | null,
  employeeSkillSkillId?: string | null,
};

export type DeleteEmployeeSkillInput = {
  id?: string | null,
};

export type CreateSkillInput = {
  id?: string | null,
  name: string,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
};

export type DeleteSkillInput = {
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

export type ModelEmployeeSkillFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelEmployeeSkillFilterInput | null > | null,
  or?: Array< ModelEmployeeSkillFilterInput | null > | null,
  not?: ModelEmployeeSkillFilterInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEmployeeSkillMutationVariables = {
  input: CreateEmployeeSkillInput,
  condition?: ModelEmployeeSkillConditionInput | null,
};

export type CreateEmployeeSkillMutation = {
  createEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeSkillMutationVariables = {
  input: UpdateEmployeeSkillInput,
  condition?: ModelEmployeeSkillConditionInput | null,
};

export type UpdateEmployeeSkillMutation = {
  updateEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeSkillMutationVariables = {
  input: DeleteEmployeeSkillInput,
  condition?: ModelEmployeeSkillConditionInput | null,
};

export type DeleteEmployeeSkillMutation = {
  deleteEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeSkillQueryVariables = {
  id: string,
};

export type GetEmployeeSkillQuery = {
  getEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeeSkillsQueryVariables = {
  filter?: ModelEmployeeSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeeSkillsQuery = {
  listEmployeeSkills:  {
    __typename: "ModelEmployeeSkillConnection",
    items:  Array< {
      __typename: "EmployeeSkill",
      id: string,
      employee:  {
        __typename: "Employee",
        id: string,
        firstname: string,
        lastname: string,
        createdAt: string,
        updatedAt: string,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    skills:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEmployeeSkillSubscription = {
  onCreateEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSkillSubscription = {
  onUpdateEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSkillSubscription = {
  onDeleteEmployeeSkill:  {
    __typename: "EmployeeSkill",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      firstname: string,
      lastname: string,
      skills:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      employees:  {
        __typename: "ModelEmployeeSkillConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill:  {
    __typename: "Skill",
    id: string,
    name: string,
    employees:  {
      __typename: "ModelEmployeeSkillConnection",
      items:  Array< {
        __typename: "EmployeeSkill",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
