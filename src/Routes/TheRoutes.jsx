import Login from '../components/Login.jsx'
import { Routes, Route } from "react-router-dom";
import Register from '../components/Register.jsx';
import MembershipPlans from '../components/Membership.jsx';
import PaymentGateway from '../components/PaymentGateway.jsx';
import Email from '../components/Email.jsx';
import Settings from '../components/Settings.jsx';
import Facebooks from '../Layout/Facebooks.jsx';
import Instagrams from '../Layout/Instagrams.jsx';
import WhatsApps from '../Layout/WhatsApps.jsx';
import Messengers from '../Layout/Messengers.jsx';
import Twilio from '../Layout/Twilio.jsx';
import ChatGPT from '../Layout/Chatgpt.jsx';
import ProtectedRoute from './ProtectedRouted.jsx';

function TheRoutes() {
    return(
        <>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/MembershipPlans" element={
                    <ProtectedRoute>
                        <MembershipPlans />
                    </ProtectedRoute>} 
                />
                <Route path="/PaymentGateway" element={
                    <ProtectedRoute>
                        <PaymentGateway />
                    </ProtectedRoute>} 
                 />
                <Route path="/Email" element={
                    <ProtectedRoute>
                        <Email />
                    </ProtectedRoute>} 
                 />
                <Route path="/Settings" element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>}  
                />
                <Route path="/Settings/Facebook" element={<Facebooks />} />
                <Route path="/Settings/Instagrams" element={<Instagrams />} />
                <Route path="/Settings/WhatsApps" element={<WhatsApps />} />
                <Route path="/Settings/Messenger" element={<Messengers />} />
                <Route path="/Settings/Twilio" element={<Twilio />} />
                <Route path="/Settings/Chatgpt" element={<ChatGPT />} />

            </Routes>
        </>
    )
}

export default TheRoutes;