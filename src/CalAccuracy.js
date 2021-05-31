import React from 'react'

function CalAccuracy({correctCharCount, time}) {
    time = 60-time;
    if (correctCharCount !== 0 && time !== 0) {
        const grossWPM = Math.round((correctCharCount/5) / (time/60));
        return (
            <div style={{fontSize: "30px", textAlign: "center"}}>{grossWPM} WPM</div>
        )
    }    
    return null;
}

export default CalAccuracy
