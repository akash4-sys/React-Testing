import { render, screen, fireEvent } from '@testing-library/react';
import Summary from '../Summary';

function initialConditions() {
    render(<Summary />);
    const button = screen.getByRole("button", { name: "Amazing Button" });
    const checkbox = screen.getByRole("checkbox", { label: "Disable Button???"})
    return { button, checkbox };
}

test("initial conditions", () => {
    const { button, checkbox } = initialConditions();
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
});

test("button to be disabled on checking checkbox", () => {
    const { button, checkbox } = initialConditions();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
})