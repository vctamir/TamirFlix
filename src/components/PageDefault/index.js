import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import PageContainer from '../PageContainer'

const PageDefault = ({children}) => {
    return (
        <>
            <Menu />
            <PageContainer>
                {children}
            </PageContainer>
            <Footer />
        </>
    )
}

export default PageDefault