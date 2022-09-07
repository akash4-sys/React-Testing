import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);

    // optionType is 'scoops' or 'toppings'
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => error = "");
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    return (
        <>
            <h2>{title}</h2>
            <Row>{optionItems}</Row>
        </>
    );
}