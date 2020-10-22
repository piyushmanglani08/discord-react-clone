import React, { useEffect } from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import SidebarChannel from "./SidebarChannels";
import {Avatar} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import db, {auth} from "./firebase";

function Sidebar() {
    const user = useSelector(selectUser);
   

    
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <h2>Sidebar</h2> 
                <ExpandMoreIcon />
            </div>


            <div className = "sidebar__channels">
                <div className = "sidebar__channelsHeader">
                <div className = "sidebar__header">
                <ExpandMoreIcon />
                  <h4>Text Channels</h4>
                </div>
            
                <AddIcon className = "sidebar__addChannels"/>
                </div>

            <div className = "sidebar__channelsList">
                <SidebarChannel />  
                <SidebarChannel />  
                <SidebarChannel />  
                <SidebarChannel />      
            </div> 
            </div>
            <div className = "sidebar__voice">
                <SignalCellularAltIcon
                  className = "sidebar__voiceIcon"
                  fontSize = "large" />
                  <div className = "sidebar__voiceInfo">

                    <h3> Voice Connected </h3>
                    <p>stream</p>
                  </div>
                  <div className = "sidebar__voiceIcons">
                      <InfoIcon />
                      <CallIcon />
                  </div>
            </div>
            <div className = "sidebar__profile">
                  <Avatar onCLick={() => auth.signOut() } src={user.photo} />
                  <div className = "sidebar__profileInfo">
                      <h3>{user.displayName}</h3>
                      <p>#{user.uid.substring(0,5)}</p>

                  </div>

                  <div className = "sidebar__profileIcons">
                      <MicIcon />
                      <HeadsetIcon />
                      <SettingsIcon />

                  </div>
            </div>

        </div>
    
    )
}

export default Sidebar;
