import React from 'react';

import dadosIniciais from '../../data/dadosIniciais.json';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';

function Home() {
    return (
        <PageDefault>
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={" Os Cavaleiros do Zodíaco é uma série japonesa de mangá e anime escrito e ilustrada por Masami Kurumada.     Conta-se que os cavaleiros aparecem quando o mundo é ameaçado pelo mal"}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />

            <Carousel
                category={dadosIniciais.categorias[3]}
            />

            <Carousel
                category={dadosIniciais.categorias[4]}
            />

            <Carousel
                category={dadosIniciais.categorias[5]}
            />
            <Carousel
                category={dadosIniciais.categorias[6]}
            />
            <Carousel
                category={dadosIniciais.categorias[7]}
            />
            <Carousel
                category={dadosIniciais.categorias[8]}
            />

        </PageDefault>
    );
}

export default Home;
