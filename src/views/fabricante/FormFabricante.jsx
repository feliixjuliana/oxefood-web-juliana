import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormFabricante() {

    const { state } = useLocation();
    const [idFabricante, setIdFabricante] = useState();
    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [qtdFuncionarios, setQtdFuncionarios] = useState();
    const [inicioContrato, setInicioContrato] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/fabricante/" + state.id)
                .then((response) => {
                    setIdFabricante(response.data.id)
                    setNome(response.data.nome)
                    setEndereco(response.data.endereco)
                    setValorMercado(response.data.valorMercado)
                    setPaginaWeb(response.data.paginaWeb)
                    setQtdFuncionarios(response.data.qtdFuncionarios)
                    setInicioContrato(formatarData(response.data.inicioContrato))
                })
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function salvar() {

        let fabricanteRequest = {
            nome: nome,
            endereco: endereco,
            valorMercado: valorMercado,
            paginaWeb: paginaWeb,
            qtdFuncionarios: qtdFuncionarios,
            inicioContrato: inicioContrato,
        }


            axios.post("http://localhost:8081/api/fabricante", fabricanteRequest)
                .then((response) => { console.log('Fabricante cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o Fabricante.') })
    }


    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                        {idFabricante === undefined &&
                            <h2> <span style={{ color: 'darkgray' }}> Fabricante &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                        }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>



                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />


                                    <Form.Input
                                    required
                                    fluid
                                    label='Endereco'
                                    value={endereco}
                                    onChange={e => setEndereco(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                
                            <Form.Input
                                    required
                                    fluid
                                    label='Valor no Mercado'
                                    value={valorMercado}
                                    onChange={e => setValorMercado(e.target.value)}
                                />

                                
                                <Form.Input
                                    required
                                    fluid
                                    label='Página na Web'
                                    value={paginaWeb}
                                    onChange={e => setPaginaWeb(e.target.value)}
                                />


                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    required
                                    fluid
                                    label='Quantidade de Funcionários'
                                    value={qtdFuncionarios}
                                    onChange={e => setQtdFuncionarios(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Data de Início de Contrato'
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={inicioContrato}
                                        onChange={e => setInicioContrato(e.target.value)}
                                    />
                                </Form.Input>


                            </Form.Group>

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
                                <Link to={'/list-fabricante'}>Voltar</Link>

                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
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