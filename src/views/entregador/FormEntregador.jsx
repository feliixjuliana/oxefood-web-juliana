import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormRadio, FormGroup, FormSelect } from 'semantic-ui-react';

const options = [
    { key: 'PE', value: 'PE', text: 'Pernambuco' },
    { key: 'BA', value: 'BA', text: 'Bahia' },
    { key: 'RJ', value: 'RJ', text: 'Rio de Janeiro' },
]

//const state = {}

//const handleChange = (e, { value }) => this.setState({ value })


export default function FormProduto() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'

                                />
                            </Form.Group>


                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Dt Nascimento'
                                    maxLength="100"
                                    placeholder='EX:20/03/1985'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'>
                                    <InputMask
                                        mask="(99)9 9999-9999"
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Fone Fixo'

                                />

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'

                                />

                                <Form.Input
                                    fluid
                                    label='Valor por Frente'

                                />
                            </Form.Group>



                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4} />

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade' />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={5} />
                            </Form.Group>

                            <FormSelect
                                fluid
                                label='UF'
                                options={options}
                                placeholder='Selecione seu UF'
                            />


                            <Form.Input
                                fluid
                                label='Complemento' />

                            <FormGroup inline>
                                <label>Ativo</label>
                                <FormRadio
                                    label='Sim'
                                    value='sm'
                                //  checked={value === 'sm'}
                                //  onChange={this.handleChange}
                                />
                                <FormRadio
                                    label='Não'
                                    value='md'
                                //  checked={value === 'md'}
                                //  onChange={this.handleChange}
                                />
                            </FormGroup>

                        </Form>


                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
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