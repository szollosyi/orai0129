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
    
}