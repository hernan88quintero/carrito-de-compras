import React from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import Producto from "./Componentes/Producto";
import Navegacion from "./Componentes/Navegacion";
import {listaProductos} from "./listaProductos.json";

console.log(listaProductos);

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }
  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        );
      }
    );

    


    return (
      <Container>
        <Navegacion titulo="Bienvenidos a E-Shopping"/>
        <Row>
          {arregloComponentes}
        </Row>

      
       
      </Container>
    );
  }
}

export default App;
