import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/category/0"

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Login Page</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-secondary">
                    Don't have an account?<Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;