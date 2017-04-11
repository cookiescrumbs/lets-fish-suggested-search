import React from 'react';
import { render } from 'react-dom';
import items from './data/items';
import { SuggestedSearch } from 'barbel';

const props = {
    items,
    label: 'start your search',
    placeholder: 'start your search',
    errorMessage: 'We couldn’t find results for {{search}}'
};

render(
    <SuggestedSearch { ...props }/>,
     document.querySelector('#suggested-search')
);
