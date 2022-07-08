import { useState, useEffect } from 'react';
import * as API from '../services/usuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    useEffect(() => {
        API.getAllUsers()
            .then(setUsers)
            .catch(console.log);
    }, []);

    const isUsuario = (event) => {
        event.preventDefault();
        const user = API.getUser(userName, userPassword);
        if(user.length > 0) {
            navigate('/usuario', {
                state: {
                    user: user[0]
                }
            });
        } else {
            alert("Usuario no existe en el sistema");
            setUserName('');
            setUserPassword('');
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <div id="component-login">
                        <Form className="d-grid">
                            <h1>Inciar sesión</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar nombre de usuario" onChange={(e) => setUserName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresar contraseña" onChange={(e) => setUserPassword(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={isUsuario}>
                                Entrar
                            </Button>
                            
                        </Form>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}