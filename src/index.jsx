import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { SuggestedSearch } from 'barbel';


export default class LetsFishSuggestedSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: null,
            label: 'Start your search',
            placeholder: 'Start your search',
            errorMessage: 'We couldn’t find results for {{search}}'
        };
    }

    componentDidMount() {
        axios.get('/search/suggested', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            this.setState({ items: res.data });
        });
    }

    render() {
        return (
        <div>
            <SuggestedSearch { ...this.state }/>
        </div>
        );
    }

}

render(
    <LetsFishSuggestedSearch />,
    document.querySelector('#suggested-search')
);
