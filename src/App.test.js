import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCapWithSpaces } from './App';

// const linkElement = screen.getByRole('link', { name: /learn react/i });

test('button has correct initial color', () => {
	render(<App />);

	// name is usually displayed text, these statements are case sensitive
	const button = screen.getByRole('button', { name: 'Change to blue' });

	// to check for any css properties you can use toHaveStyle
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});


test('button turns blue on clicked', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	expect(button).toHaveStyle({ backgroundColor: 'red' });
	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
	expect(button.textContent).toBe('Change to red');
});

// Number of tests can actually be reduced like testing inital conditions once

// Here I'm creating a function for initials conditions don't know if it recommended method or not
function initialConditions() {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	expect(button).toBeEnabled();
	const checkbox = screen.getByRole('checkbox', { label: 'Change Color??' });
	expect(checkbox).not.toBeChecked();
	return { button, checkbox };
}


test('inital conditions', () => {
	initialConditions();
});

test('button should be disabled when checkbox is checked', () => {
	// this test can be done in above test but not doing it
	const { button, checkbox } = initialConditions();

	// testing functionality
	fireEvent.click(checkbox);
	expect(checkbox).toBeChecked();
	expect(button).not.toBeEnabled();

	// revert
	fireEvent.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeEnabled();
});


test('button should be gray when disabled', () => {
	// I commented out this lines as this cases are already being tested in above test, so there's no point in testing it again

	const { button, checkbox } = initialConditions();
	expect(button).toHaveStyle({ backgroundColor: 'red' });
	fireEvent.click(checkbox);
	// expect(checkbox).toBeChecked();
	// expect(button).not.toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	// revert it back
	fireEvent.click(checkbox);
	// expect(checkbox).not.toBeChecked();
	// expect(button).toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});


//  Didn't implement this test to functionality becoz it requried to change above tests and i m not interested
describe('spaces before camel-case capital letters', () => {
	test('works for no inner capital letters', () => {
		expect(replaceCapWithSpaces('Red')).toBe('Red');
	});

	test('works for one inner capital letters', () => {
		expect(replaceCapWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});

	test('works for all inner capital letters', () => {
		expect(replaceCapWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});