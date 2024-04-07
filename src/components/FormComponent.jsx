import React from 'react'
import Form from 'react-bootstrap/Form';

export default function FormComponent() {
    return (
        <div>
            <div>
                <Form.Label htmlFor="cityname">Please enter city name</Form.Label>
                <Form.Control
                    type="text"
                    id="cityname"
                />
            </div>
        </div>
    )
}
