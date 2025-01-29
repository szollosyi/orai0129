import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import sha256 from "js-sha256";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

export const Login = () => {
    const [loginName, setLoginName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [avatar, setAvatar] = useState("");
    const vantaref = useRef(null);
    
    useEffect(() => {
        let vantaEffect;
        if (vantaref.current) {
          try{
            vantaEffect = WAVES({
                el: vantaref.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 150.00,
                minWidth: 150.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x000000,
                shininess: 15.00,
                waveHeight: 10.00,
                waveSpeed: 0.50,
          });
          } catch (error) {
            console.log(error);
          }
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);
    return (
        <div ref={vantaref} style={{ height: "100vh", color: "#fff", overflow: "hidden"}}>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                color: "#fff"
            }}>
                <h2>Bejelentkezés</h2>
                <input type="text"
                placeholder="Felhasználónév"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                style={{marginBottom: "10px", padding: "10px", borderRadius: "5px", width: "80%"}}
                />
                <input type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{marginBottom: "10px", padding: "10px", borderRadius: "5px", width: "80%"}}
                />
                <button style={{
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#1e90ff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"}}>
                        Bejelentkezés
                </button>
            </div>
        </div>
    );
}