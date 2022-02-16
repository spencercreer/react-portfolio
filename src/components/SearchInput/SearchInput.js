import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function SearchInput({ handleSearch }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>Search Projects</InputGroup.Text>
            <FormControl
                placeholder="Search by technology or project name"
                onChange={handleSearch}
            />
        </InputGroup>
    )
}