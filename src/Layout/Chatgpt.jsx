import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "../components/Menu"

const ChatGPTComponent = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [question, setQuestion] = useState('');
  const [role, setRole] = useState('');
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    if (storedUserId) {
      setUserid(storedUserId);
    }
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    console.log("Enviando los datos:", { question, role, id_usuario: userid });
  
    try {
      const response = await axios.post('http://localhost:3001/chatgpt', { question, role, id_usuario: userid});
      
      setMessage(response.data.message);
      setQuestion('');
      setRole('');
    } catch (err) {
      setError('Error al comunicarse con el servidor.');
      console.error(err);
    }
  };

  return (
    <div className='flex'>
        <Menu/>
        <div className='bg-green-100 w-full'>
            <h1>ChatGPT API</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid w-[250px] '>
                    <label htmlFor="role">Descripcion del Gtp personalizado: </label>
                    <input
                    className=''
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Escribe el rol de la IA aquí"
                    />
                </div>
                <div className='grid pt-3'>
                    <label htmlFor="question">Pregunta:</label>
                    <input
                    className='h-[150px] w-[250px] m-2'
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Escribe tu pregunta aquí"
                    />
                    
                </div>
                <button className='bg-green-500 p-3 rounded ml-2' type="submit">Enviar</button>
            </form>
            {message && <p>Respuesta de ChatGPT: {message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        
    </div>
  );
};

export default ChatGPTComponent;
