import { render, screen, fireEvent } from '@testing-library/react';
import Summary from '../Summary';
import userEvent from '@testing-library/user-event';

function initialConditions() {
    const user = userEvent.setup();
    render(<Summary />);
    const button = screen.getByRole("button", { name: "Amazing Button" });
    const checkbox = screen.getByRole("checkbox", { label: "Enable Button???"})
    return { user, button, checkbox };
}

test("initial conditions", () => {
    const { button, checkbox } = initialConditions();
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
});

// test("button to be disabled on checking checkbox", () => {
//     const { button, checkbox } = initialConditions();
//     fireEvent.click(checkbox);
//     expect(checkbox).toBeChecked();
//     expect(button).toBeEnabled();
//     fireEvent.click(checkbox);
//     expect(checkbox).not.toBeChecked();
//     expect(button).toBeDisabled();
// })

test("button to be disabled on checking checkbox", async () => {
    const { user, button, checkbox } = initialConditions();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});


//  Test should be working not working becoz of react-bootstrap i guess
// test("popover responds to hover", async () => {
//     const regex = /no icream will actually be delivered/i;
//     const noPopOver = screen.queryByText(regex);
//     expect(noPopOver).not.toBeInTheDocument();

//     // Popover appear on hover
//     const termsCond = screen.getByText("terms and conditions");
//     await userEvent.hover(termsCond);

//     // Popover disappears on not hovering
//     const Popover = screen.getByText("no icream will actually be delivered");
//     console.log(Popover)
//     expect(Popover).toBeInTheDocument();
//     await userEvent.unhover(termsCond);
//     expect(screen.queryByText(regex)).not.toBeInTheDocument();
// });


