import React, { useState } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.07 - ControlledPattern
 * - Features: 
 * 
 *     --> Building 'ControlledPattern' component.
 * 
 * Note: this component is a form that fills characteristics
 * of a controlled pattern
 */

const ControlledPattern = () => {
    
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim().length === 0) {
            setError("Name cannot be empty");
        } else {
            setError('');
            // You can perform actions with the form data here upon submission
            console.log('Submitted Data:', formData);
        }
    };

    const { name, age } = formData;

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                    className="focus:pointer-events-auto"
                />
                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={handleChange}
                    className="focus:pointer-events-auto"
                />
                <ButtonGeneral>
                    <button type="submit">Submit</button>
                </ButtonGeneral>
            </form>
            {/* Display values upon submission */}
            {formData.name && formData.age && (
                <div>
                    <p><span className="text-white font-semibold"> Name: </span> {name}</p>
                    <p><span className="text-white font-semibold"> Age:  </span>{age}</p>
                </div>
            )}
        </FormWrapper>
    );
};

export default ControlledPattern;
