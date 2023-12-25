import '../../components/Main/hello.css';
import { useParams } from 'react-router-dom';

// import Api from '../../service/api';

function HelloUser() {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <span className="hello_message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
    </>
  );
}

export default HelloUser;
