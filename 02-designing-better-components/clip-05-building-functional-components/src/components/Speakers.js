import SpeakersList from './SpeakersList'
import SpeakersToolbar from './SpeakersToolbar'
import { useState } from "react";

function Speakers({theme,setTheme}) {
    const [showSessions, setShowSessions] = useState(true);
    return (
       <>
         <SpeakersToolbar 
            theme={theme} 
            setTheme={setTheme}
            setShowSessions={setShowSessions}
            showSessions={showSessions}/>
         <SpeakersList 
            showSessions={showSessions}
         />
       </>
    )
}

export default Speakers
