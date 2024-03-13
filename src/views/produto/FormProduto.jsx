import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder='Informe o nome do produto'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder='Informe o código do produto.'
                                />

                            </Form.Group>
                            

                            <FormTextArea label='Descrição' placeholder='Escreva sobre o produto...' width= "70"/>

                            
                           
                         <Form.Group widths='equal'>
                            <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega mínimos em minutos'
                                    maxLenght= "100"
                                    placeholder= "30"/> 

                                    <Form.Input
                                    fluid
                                    label='Tempo de entrega máximo em minutos'
                                    maxLenght= "100"
                                    placeholder= "40"/> 

                        </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}