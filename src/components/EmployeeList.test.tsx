import React from 'react'
import EmployeeList, { ListEmployees } from './EmployeeList'
import {
    render,
    waitFor,
} from '@testing-library/react'
import mocks from '../apolloMocks'

import { MockedProvider } from '@apollo/client/testing'

it('EmployeeList reflects query', async () => {


    const { debug, container } = render(
        <MockedProvider mocks={mocks} addTypename={false} >
            <EmployeeList />
        </MockedProvider>
    )

    // await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

    await waitFor(() => 
        expect(container.textContent).toContain('fname lname')
    )
    await waitFor(() => 
    expect(container.textContent).toContain('fname2 lname2')
)
})