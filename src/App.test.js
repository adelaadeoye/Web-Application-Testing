import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('Test if  count of balls and strikes display', () => {
    const doc = render(<App />)
  
    doc.getByTestId('ball')
    doc.getByTestId('strike')
  })

  test('All buttons display', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/ballBtn/i);
    getByTestId("foulBtn");
    getByTestId("hitBtn");
    getByTestId(/strikeBtn/i);
  });

  test('If Hit Button is click all counts Reset to 0', () => {
    const  getByTestId  = render(<App />);
  
    const ballCounter = getByTestId.getByTestId('ballCount')
    expect(ballCounter.textContent).toBe('0')

    const strikeCounter = getByTestId.getByTestId('strikeCount')
    expect(strikeCounter.textContent).toBe('0')
  
    const hitBtn = getByTestId.getByTestId(/HIT/i)
    fireEvent.click(hitBtn)
    expect(ballCounter.textContent).toBe('0')
    expect(strikeCounter.textContent).toBe('0')
   
  })