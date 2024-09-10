import { useEffect, useState } from "react";
import Menu from "../components/Menu"
import axios from "axios";
 
function Facebooks() {

    const [user, setUser] = useState(null);

    const fetchUserProfile = () => {
        window.FB.api('/me', { fields: 'name, email, picture' }, function(response) {
        setUser(response);
        });
    };

    const handleFacebookLogin = () => {
        window.FB.login(response => {
            if (response.authResponse) {
                fetchUserProfile();
                const accessToken = response.authResponse.accessToken;
    
                console.log('Access Token:', accessToken);
    
                axios.post('http://localhost:3001/token', { accessToken })
                    .then(response => {
                        const longLivedToken = response.data.longLivedToken;
                        console.log('Long Access Token:', longLivedToken);
                    })
                    .catch(error => {
                        console.error('Error token:', error);
                    }); 
            } else {
                console.log('Canceló el inicio de sesión');
            }
        }, { scope: 'public_profile,email' });
    };
    

    useEffect(() => {
        // Cargar el SDK de Facebook
        window.fbAsyncInit = function() {
        window.FB.init({
            appId: '2781590058814770', 
            cookie: true,
            xfbml: true,
            version: 'v16.0' 
        });

        // Revisar el estado de autenticación cuando se carga la página
        window.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
            fetchUserProfile();
            }
        });
        };

        // Insertar el SDK de Facebook en el DOM
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    return (
        <div className="flex">
            <Menu />
                <div className='center'>
                    <h1>iniciar sesion con facebook</h1>
                    <div className='btn'>
                    <button className="px-6 py-6 bg-blue-400" onClick={handleFacebookLogin}>iniciar sesion</button>
                    </div>
                    {user && (
                        <div>
                            <div className="profile">
                                <img src={user.picture.data.url} alt="Profile" />
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h1 className="w-[150px] h-[60px] bg-blue-500
                                ">Bienvenido a facebook</h1>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    );
};
export default Facebooks