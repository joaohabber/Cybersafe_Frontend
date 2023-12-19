import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);


  return (
    <div className="home">
    </div>
  );
}

export default Home;