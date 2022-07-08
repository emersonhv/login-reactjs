import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

export function UserDetail() {

    const location = useLocation();
    const user = {
        nombre :location.state.user.name.first + " " + location.state.user.name.last,
        imagen :location.state.user.picture.large,
        correo :location.state.user.email,
        celular:location.state.user.cell,
        genero :location.state.user.gender === "male" ? "Masculino" : "Femenino",
        ciudad :location.state.user.email,
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <div>
                        <h2>Detalle de usuario</h2>
                        <Image src={user.imagen} roundedCircle="true"/><br/>
                        <label><strong>Nombre: </strong></label> {user.nombre}<br/>
                        <label><strong>Genero: </strong></label> {user.genero}<br/>
                        <label><strong>Correo eléctronico: </strong></label> {user.correo}<br/>
                        <label><strong>Celular: </strong></label> {user.celular}<br/>
                        <label><strong>Ciudad: </strong></label> {user.ciudad}<br/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}