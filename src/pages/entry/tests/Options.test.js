import { render, screen } from '@testing-library/react';
import Options from '../Options';

test("display image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);

    // Here $ is used to detect scoops at end of string
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((item) => item.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test("display image for each toppings option", async () => {
    render(<Options optionType="toppings" />);
    const toppingImages = await screen.findAllByRole('img', { name: /toppings$/i });
    expect(toppingImages).toHaveLength(3);
    const altText = toppingImages.map((item) => item.alt);
    expect(altText).toEqual(['Cherries toppings', 'M&Ms toppings', 'Hot fudge toppings']);
})