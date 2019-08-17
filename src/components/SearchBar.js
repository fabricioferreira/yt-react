import { Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const SearchBar = props => {
    const [state, setState] = useState({
        searchTerm: ''
    })

    const handleSubmit = event => {
        const { searchTerm } = state
        const { onFormSubmit } = props

        console.log(searchTerm)
        onFormSubmit(searchTerm)
        event.preventDefault()
    }

    const handleChange = event => setState({ searchTerm: event.target.value })

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default SearchBar