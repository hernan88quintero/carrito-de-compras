import React from "react";
import {Badge, Button, Popover, PopoverBody, PopoverHeader, Table} from "reactstrap";
import {listaCarrito} from "../listaCarrito.json";


class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };

        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen

        }));
    }

    sumaTotal(){
        let total = 0;
        let sumaTotal = this.state.listaCarrito.map(
            (listaCarrito) => {
                total += parseInt(listaCarrito.precio)
            }
        )
        return(total)
    }


    render(){

        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
              return(
                <tr>
                  <td>{(i += 1)}</td>
                  <td>{listaCarrito.titulo}</td>
                  <td>{listaCarrito.precio}</td>
                </tr>
      
              );
            }
          )


        return(
            <div>
                <Button id="Popover1" outline color="success">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="warning"  id="Badge1">{listaCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader></PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <td>Total: </td>
                                <td></td>
                                <td>{Intl.NumberFormat("de-DE").format(this.sumaTotal())} AR$</td>
                            </tfoot>               
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;

