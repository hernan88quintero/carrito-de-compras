import React from "react";
import { ModalFooter, ModalBody, ModalHeader, Modal, Container, Button, CardImg } from "reactstrap";
import "./FichaProducto.css";
import {listaCarrito} from "../listaCarrito.json";


class FichaProducto extends React.Component{
    constructor(props) {
        super();
        this.state = {
            modal:false,
            listaCarrito,
            stock: props.props.stock
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio          

        });
            this.setState(prevState => ({
            modal: !prevState.modal
        }));

        if (this.state.stock !== 0) {
            this.setState(prevState => ({
                stock: prevState.stock -1
            }));
        } else {
            alert("EL PRODUCTO NO SE ENCUENTRA DISPONIBLE")
        }

        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;


    }

    render() {
        return(
            <Container>
                <Button color="secondary" outline onClick={this.toggle}>Ver Ficha</Button> 
                <Modal isOpen={this.state.modal}>
                <ModalHeader>{this.props.props.titulo}</ModalHeader>

                <ModalBody>                    
                    <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: {this.props.props.descripcion}</p>
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}$</b> pesos.</p>
                        <p>Este producto cuenta con una disponibildad de <b>{this.state.stock}</b> unidades.</p>
                </ModalBody>

                <ModalFooter className="modalFooter">
                    <Button color="success" outline onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                    <Button color="secondary" outline onClick={this.toggle}>Volver atrás</Button>
                </ModalFooter>

                </Modal>
            </Container>
        )
    }

}

export default FichaProducto;