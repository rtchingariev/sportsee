// import logo from '../../logo.svg';
import '../../assets/styles/custom.css';
import '../../components/Main/main.css';
import Header from '../../components/Header/header.jsx';
import AsideNav from '../../components/Aside/aside.jsx';
import HelloUser from '../../components/Main/hello.jsx';
import BarChartActivity from '../../components/Main/barchart.jsx';
import LineChart from '../../components/Main/linechart.jsx';
import RadarChart from '../../components/Main/radarchart.jsx';
import PieChart from '../../components/Main/piechart.jsx';

import getUser from '../../service/api.jsx';
import { useParams } from 'react-router-dom';

const Index = async () => {
  const userId = useParams();
  const userData = await getUser(userId);
  return (
    <div className="App">
      <Header />

      <div className="container">
        <aside>
          <AsideNav />
        </aside>
        <main style={{ padding: '20px', margin: '20px' }}>
          <HelloUser />

          <div>
            <h3>Données utilisateur</h3>
            {userData ? (
              <div>
                <p>
                  Nom: {userData.userInfos.firstName}{' '}
                  {userData.userInfos.lastName}
                </p>
                <p>Âge: {userData.userInfos.age}</p>
                {/* Ajoutez d'autres champs selon la structure des données */}
              </div>
            ) : (
              <p>Chargement...</p>
            )}
          </div>

          <div className="main_container">
            <div className="main_container_left">
              {/* Recharts - BarChart */}
              <div className="BarChart">
                <BarChartActivity />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* Recharts - LineChart  */}
                <div className="LineChart">
                  <LineChart />
                </div>
                {/* Recharts - RadarChart  */}
                <div className="RadarChart">
                  <RadarChart />
                </div>
                {/* Recharts - PieChart  */}
                <div className="PieChart">
                  <PieChart />
                </div>
              </div>
            </div>
            <div className="main_container_right">main container right</div>
          </div>
        </main>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default Index;
