import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
// import styled from 'styled-components';
import TimeSheetTable from '../components/TimeSheetTable'
// import ProfileHeader from '../components/ProfileHeader'
import SidbarNav from "../components/SidbarNav";


const UserTimeSheet = () => {
    const userToken = localStorage.getItem('userToken');
    const [token, setToken] = useState(userToken);
    const history = useHistory();
    useEffect(() => {
        if(!token){
            history.push("/");
        }
    })

    return (
        <>
            {/* <ProfileHeader/> */}
            <SidbarNav/>
            <TimeSheetTable UserToken={token} />
        </>
    );
   
};


   

export default UserTimeSheet;
