// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
import { useState, useEffect } from 'react';

function BarChartActivity() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/user/18/activity';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.json();
      })
      .then((apiResponse) => {
        console.log("Réponse de l'API :", apiResponse);

        // Accéder à la propriété 'data' pour obtenir les données
        const responseData = apiResponse.activity;

        // Mettre à jour l'état avec les données obtenues
        setActivity(responseData);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div>
      BarChart component
      {activity ? (
        <div>{activity.sessions[1]}</div>
      ) : (
        <p>Chargement en cours...</p>
      )}
      {/* <BarChart
        width={500}
        height={300}
        data={activity.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart> */}
    </div>
  );
}

export default BarChartActivity;
