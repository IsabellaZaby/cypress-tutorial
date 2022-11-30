import {FC, useState} from "react";
import {Button, TextField} from "@mui/material";
import './Form.css';
import {Link} from "react-router-dom";

const Form: FC = () => {

    const [send, setSend] = useState(false);
    const [name, setName] = useState('Oldie');

    return (
        <div>
            <h2>Form</h2>
            {!send ? <div className="form-wrapper">
                <TextField data-testid="input-firstname" id="filled-basic" label="Vorname" variant="filled" margin="normal"
                           onBlur={(e) => setName(e.target.value)}/>
                <TextField data-testid="input-name" id="filled-basic" label="Name" variant="filled" margin="normal"/>
                <TextField data-testid="input-year" id="filled-basic" label="Geburtsjahr" variant="filled" type="number"
                           margin="normal"/>
                <Button data-testid="input-submit" variant="contained" onClick={() => setSend(true)}>Click me</Button>
            </div> : <div className="form-wrapper" data-testid="form-success-message">
                <span data-testId="form-success-message-name">Du bist alt, {name}!</span>
                <Link to="/" style={{color: 'black'}}>Zurück zur Homepage</Link>
            </div>}
        </div>
    );
};

export default Form;