import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import InputWithAlert from '../'

test('jsdom has text contents of alert', () => {
  const {} = render(<InputWithAlert />)
  const input = screen.getByLabelText('Input with alert on blur')
  userEvent.click(input)
  userEvent.tab()
  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
})

