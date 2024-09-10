import axios from "axios";
import Menu from "../components/Menu"
import { useState } from "react";


    //Twilio
    
function Twilio() {

    const [getSid, setGetSid] = useState("")
    const [token, setToken] = useState("")
    const [numero, setNumero] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSID=(e)=>{
        setGetSid(e.target.value)
    }
    const handleToken=(e)=>{
        setToken(e.target.value)
    }
    const handleNumero=(e)=>{
        setNumero(e.target.value)
    }
    const handleSubmitted=()=>{
        setSubmitted(true)
    }

    const sendSMS=()=>{
        axios.post('http://localhost:3001/sms', {
            to:'+573012024058',//este numero puede ser cualquiera, siempre y cuando sea un numero valido
            message:'Esta es una prueba de mensaje desde tu aplicacion'
        })
        .then (response=>{
            console.log("SMS enviado:", response.data);
        })
        .catch (error=>{
            console.error("Error al enviar SMS:", error);
        });
    }

    return (
        <div className="flex">
            <Menu/>
            <div className="px-5" >
                <h1 className="font-semibold pl-3">Twilio</h1>
                <form className="grid gap-4 pb-3" action="">
                    <input type="text" placeholder="SID" value={getSid} onChange={handleSID} className="border border-blue-400"/>
                    <input type="text" placeholder="Token" value={token} onChange={handleToken} className="border border-blue-400"/>
                    <input type="text" placeholder="Numero" value={numero} onChange={handleNumero} className="border border-blue-400"/>
                </form>
                <button className="px-14 py12 bg-red-600" onClick={handleSubmitted}>Enviar SMS</button>
                {submitted && (
                    <div className="mt-5 p-4 border border-green-500">
                        <h2 className="font-semibold">Datos ingresados:</h2>
                        <p><strong>SID:</strong> {getSid}</p>
                        <p><strong>Token:</strong> {token}</p>
                        <p><strong>Número:</strong> {numero}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Twilio