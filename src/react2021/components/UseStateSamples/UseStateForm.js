import { useState } from 'react';

function UseStateForm() {
    const [form, setState] = useState({
        username: '',
        password: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
    };

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h3> UseStateForm</h3>
            <form onSubmit={printValues}>
                <label>
                    Username:
        <input
                        value={form.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
        <input
                        value={form.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UseStateForm;