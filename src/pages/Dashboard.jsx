import GlobalStyle from '../styles/createGlobalStyle.jsx'
import Header from "../components/Header";
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

function Dashboard() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Dashboard;
