import { getEmployeeSkills } from './components/Skills'
import { ListEmployees } from './components/EmployeeList'
import { LIST_SKILLS } from './components/SkillAutocomplete'

export default [
    {
        request: {
            query: ListEmployees,
        },
        result: {
            data: {
                listEmployees: {
                    items: [
                        {
                            firstname: 'fname',
                            lastname: 'lname',
                            id: 1
                        },
                        {
                            firstname: 'fname2',
                            lastname: 'lname2',
                            id: 2
                        }
                    ]
                }
            }
        }
    },
    {
        request: {
            query: getEmployeeSkills,
        },
        result: {
            data: {
                getEmployeeSkills: {
                    items: [
                        {
                            id: 1,
                            skill: {
                                id: 1
                            },
                            employee: {
                                fname: 'fname',
                                lname: 'lname',

                            }
                        },
                    ]
                }
            }
        }
    },
    {
        request: {
            query: LIST_SKILLS,
        },
        result: {
            data: {
                listSkills: {
                    items: [
                        {
                            id: 1,
                            name: 'JavaScript'
                        }, 
                        {
                            id: 2,
                            name: 'TypeScript'
                        },
                    ]
                }
            }
        }
    }
]