import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import PageContainer from '../PageContainer'
import PageBackground from '../PageBackGround'

const PageDefault = ({children}) => {
    return (
        <>
            <Menu />
            <PageBackground>
                <PageContainer>
                    {children}
                </PageContainer>
            </PageBackground>
            <Footer />
        </>
    )
}

export default PageDefault