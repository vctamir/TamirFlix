

import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import Title from '../../../components/Title';
import FormField from '../../../components/FormsField';

const CadastroCategorias = () => {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const [categoria, setcategoria] = useState(defaultValues);
  const [categorias, setCategorias] = useState([]);

  const setValue = (chave, valor) => {
    console.info('[setValue]', chave, valor);
    setcategoria({
      ...categoria,
      [chave]: valor,
    });
  };
  const handledChange = (e) => {
    console.info('[handledChange]', e.target);
    // const {getAttribute,value} = e.target;
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };
  return (
    <PageDefault>
      <Title>Cadastro de categorias</Title>
      <form onSubmit={(e) => {
        e.preventDefault();
        // setCategorias([...categorias,categoria])
      }}
      >
        <FormField
          caption="Nomde da categoria"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handledChange}
        />
        <FormField
          as="textarea"
          caption="Descrição"
          type="text"
          name="descricao"
          value={categoria.descricao}
          onChange={handledChange}
        />
        <FormField
          caption="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handledChange}
        />
        <div>
          <button onClick={() => {
            setCategorias(categorias.concat(categoria));
            setcategoria(defaultValues);
          }}
          >
            Cadastrar
          </button>
        </div>
      </form>
      <ul>
        {categorias.map((cat, index) => { console.info('[categorias.map]', cat);
          return (
            <li key={index} style={{ color: cat.cor }}>
              {cat.nome}
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
};

export default CadastroCategorias;
