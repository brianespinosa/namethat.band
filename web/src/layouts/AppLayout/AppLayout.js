import Header from 'src/components/Header'
import Main from 'src/components/Main'
import Footer from 'src/components/Footer'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default AppLayout
