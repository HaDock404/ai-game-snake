import GlobalStyle from '../styles/createGlobalStyle.jsx'
import Header from "../components/Header";
import Main from '../components/Main.jsx';

function Dashboard() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
    </>
  );
}

export default Dashboard;
