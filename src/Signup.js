import React, { useState } from 'react';
import picture1 from './pictures/DeliveryCourierSignup.jpg';
import picture2 from './pictures/DoorDeliverySignup.jpg';

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;


    return re.test(password);
}



const Signup = () => {

    /*
     * This component will have four states:
     * "initial", "sending", "successful", "unsuccessful", "validation failed"
     */
    const [state, setState] = useState("initial");
    const [errorsState, setErrorsState] = useState([]);

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneNumberField;
    let dobField;
    let addressField;
    let vehicleTypeField;
    let emiratesIDField;

    // For the form with images
    const formData = new FormData();

    const attachFile = (evt) => {
        const files = Array.from(evt.target.files);

        files.forEach(
            (file, index) => {
                formData.append(index, file);
            }
        )
    }

    const register = () => {

        const errors = [];

        // 1. Validate the fields
        if (firstNameField.value.length === 0) {
            errors.push("Please enter your first name")
        }
        if (lastNameField.value.length === 0) {
            errors.push("Please enter your last name")
        }
        if (validateEmail(emailField.value) === false) {
            errors.push("Please enter a valid email address")
        }
        if (validatePassword(passwordField.value) === false) {
            errors.push("Please enter a password between 8 to 16 characters")
        }

        // 1.1 If fields are invalid, setState("validation failed")
        if (errors.length > 0) {
            setState("validation failed");
            setErrorsState(errors);
        }
        // 1.2 If the fields are valid, setState("sending")
        else {

            // 2 Show "sending..." and invoke the fetch()
            setState("sending");

            formData.append('firstname', firstNameField.value);
            formData.append('lastname', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('phonenum', phoneNumberField.value);
            formData.append('dob', dobField.value);
            formData.append('adress', addressField.value);
            formData.append('vehicleType', vehicleTypeField.value);
            formData.append('emiratesId', emiratesIDField.value);


            fetch(
                `${process.env.REACT_APP_BACKEND}/users/create`,
                {
                    method: 'POST',
                    // headers: {"Content-Type": "application/json"},
                    body: formData
                }
            )
                // 2.1 If the Promise resolves, setState("successful")
                .then(
                    () => {
                        setState("successful")
                        setErrorsState([])
                    }
                )
                // 2.1 Else if the Promise rejects, setState("unsuccessful")
                .catch(
                    () => {
                        setState("unsuccessful")
                    }
                )
        }
    }

    return (
        <div className="container-ms-1">
            <div class="row align-items-center">
                <div class="col-1">
                </div>
                <div class="col-2">
                    <div class="card" style={{ width: '130%' }}>
                        <img src={picture1} class="card-img-top" />
                        <div class="card-body">
                            <p class="card-text">AstroFlex allows me to work at my own convenience and earn a good extra dime! - Mahmoud Ababneh</p>
                        </div>
                    </div>
                </div>
                <div class="col-1">
                </div>
                <div class="col-4">
                    <h1 className="mt-4 mb-3" style={{ color: 'blue' }} >Come work with us!</h1>
                    <div className="mb-3">
                        <label for="exampleInputFirstName1" className="form-label">First name</label>
                        <input ref={(element) => firstNameField = element} type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputLastName1" className="form-label">Last name</label>
                        <input type="text"
                            ref={(element) => lastNameField = element}
                            className="form-control"
                            id="exampleInputLastName1"
                            aria-describedby="lastNameHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmiratesID" className="form-label">Emirates ID Number</label>
                        <input
                            type="text"
                            ref={(element) => emiratesIDField = element}
                            className="form-control"
                            id="exampleInputEmiratesID"
                            aria-describedby="EmiratesIDHelp"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Upload a portrait picture of yourself.</label>
                        <input
                            onChange={attachFile}
                            class="form-control" type="file" id="formFile" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            ref={(element) => emailField = element}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            ref={(element) => passwordField = element}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputDob1" className="form-label">Date of Birth</label>
                        <input
                            type="text"
                            ref={(element) => dobField = element}
                            className="form-control"
                            id="exampleInputDob1"
                            aria-describedby="dobHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputphoneNumber1" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            ref={(element) => phoneNumberField = element}
                            className="form-control"
                            id="exampleInputphoneNumber1"
                            aria-describedby="phoneNumberHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputaddress1" className="form-label">Address</label>
                        <input
                            type="text"
                            ref={(element) => addressField = element}
                            className="form-control"
                            id="exampleInputaddress1"
                            aria-describedby="addressHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputVehicleType" className="form-label">Vehicle Type</label>
                        <input
                            type="text"
                            ref={(element) => vehicleTypeField = element}
                            className="form-control"
                            id="exampleInputVehicleType"
                            aria-describedby="VehicleTypeHelp"
                        />
                    </div>
                    {
                        (state !== "sending" && state !== "successful") &&
                        <button onClick={register} type="submit" className="btn btn-primary mb-4">Submit</button>
                    }

                    {
                        state === "sending" && <p>sending...</p>
                    }

                    {
                        state === "successful" && <div className="alert alert-success">Successful</div>
                    }

                    {
                        state === "unsuccessful" && <div className="alert alert-danger">Please try again.</div>
                    }

                    {
                        state === "validation failed" &&
                        <div className="alert alert-danger">
                            <ul>
                                {
                                    errorsState.map(
                                        (error) => <li>{error}</li>
                                    )
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div class="col-1">
                </div>
                <div class="col-2">
                    <div class="card" style={{ width: '150%' }}>
                        <img src={picture2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">"I was able to earn up to 100 AED per hour, I loved this! - Wafaa Badr El Kadmiri"</p>
                        </div>
                    </div>
                </div>
                <div class="col-1">
                </div>
            </div>
        </div>
    )
}


export default Signup;

