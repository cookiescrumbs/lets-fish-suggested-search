import React from 'react';
import { render } from 'react-dom';
import items from './data/items';
import { SuggestedSearch } from 'barbel';

const props = {
    items,
    label: 'Search for fishing',
    placeholder: 'Search for fishing',
    errorMessage: 'Custom error message: {{search}}'
};

render(
    <SuggestedSearch { ...props }/>,
     document.querySelector('#suggested-search')
);
