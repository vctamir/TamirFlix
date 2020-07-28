import React from 'react'
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button';
import '../../../index.css'
import Title from '../../../components/Title';
const CadastroVideos = () => {
    return (
        <PageDefault>
            <Title>
                Cadastro de videos
                </Title>
            <Button to="/cadastro/categorias">
                Cadastrar Categorias
            </Button>
        </PageDefault>
    )
}

export default CadastroVideos;