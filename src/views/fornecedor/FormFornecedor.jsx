import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormFornecedor() {

    const { state } = useLocation();
    const [idFornecedor, setIdFornecedor] = useState();
    
    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [dataFundacao, setDataFundacao] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [contatoVendedor, setContatoVendedor] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/fornecedor/" + state.id)
                .then((response) => {
                    setIdFornecedor(response.data.id)
                    setNome(response.data.nome)
                    setEndereco(response.data.endereco)
                    setDataFundacao(formatarData(response.data.dataFundacao))
                    setValorMercado(response.data.valorMercado)
                    setPaginaWeb(response.data.paginaWeb)
                    setContatoVendedor(response.data.contatoVendedor)
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

        let fornecedorRequest = {
            nome: nome,
            endereco: endereco,
            dataFundacao: dataFundacao,
            valorMercado: valorMercado,
            paginaWeb: paginaWeb,
            contatoVendedor: contatoVendedor
        }

        if (idFornecedor != null) { //Alteração:

            axios.put("http://localhost:8081/api/fornecedor/" + idFornecedor, fornecedorRequest)
                .then((response) => { console.log('Fornecedor alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um Fornecedor.') })

        } else { //Cadastro:

            axios.post("http://localhost:8081/api/fornecedor", fornecedorRequest)
                .then((response) => { console.log('Fornecedor cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o Fornecedor.') })
        }
    }


    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                        {idFornecedor === undefined &&
                            <h2> <span style={{ color: 'darkgray' }}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                        }
                        {idFornecedor != undefined &&
                            <h2> <span style={{ color: 'darkgray' }}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                        }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>



                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    maxLength="100"
                                    label = 'Nome'
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label = 'Data da Fundação' >
                                <InputMask
                                mask="99/99/9999"
                                maskChar={null}
                                placeholder="Ex: 20/03/1985"
                                value={dataFundacao}
                                onChange={e => setDataFundacao(e.target.value)}
                            />
                                </Form.Input>

                            </Form.Group>

                                <Form.Input
                                    fluid
                                    label = 'Endereço'
                                    value={endereco}
                                   onChange={e => setEndereco(e.target.value)}

                                />

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    maxLength="100"
                                    label = 'Valor no Mercado'
                                    value={valorMercado}
                                   onChange={e => setValorMercado(e.target.value)}

                                />

                                   <Form.Input
                                    fluid
                                    maxLength="100"
                                    label = 'Contato do Vendedor'
                                    value={contatoVendedor}
                                    onChange={e => setContatoVendedor(e.target.value)}

                                />

                            </Form.Group>

                            <Form.Input
                                    required
                                    fluid
                                    label = 'Página na Web'
                                    value={paginaWeb}
                                    onChange={e => setPaginaWeb(e.target.value)}

                                />

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
                                <Link to={'/list-fornecedor'}>Voltar</Link>

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