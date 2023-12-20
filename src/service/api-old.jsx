import { useState, useEffect } from 'react';

//   url : http://localhost:3000/user/12

function UserName() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/user/18/';

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
        const responseData = apiResponse.data;

        // Mettre à jour l'état avec les données obtenues
        setData(responseData);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          Bonjour{' '}
          <span style={{ color: '#FF0101' }}>{data.userInfos.firstName}</span>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default UserName;

// <div>
// <h1>Données de l'API</h1>
// {data ? (
//   <div>
//     <p>ID: {data.id}</p>
//     <p style={{ margin: '30px 0 0 0' }}>
//       First name: {data.userInfos.firstName}
//     </p>
//     <p>Last name: {data.userInfos.lastName}</p>
//     <p>User Infos: {JSON.stringify(data.userInfos)}</p>
//     <p>Today Score: {data.todayScore}</p>
//     <p>Key Data: {JSON.stringify(data.keyData)}</p>
//   </div>
// ) : (
//   <p>Chargement en cours...</p>
// )}
// </div>
