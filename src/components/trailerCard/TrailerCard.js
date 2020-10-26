import React from 'react'

function TrailerCard({ id, title, videoUrl, description }) {
    return (
        <div style={{textAlign:'center'}}>
            <iframe id={id}
                title={title}
                width="90%" height="600"
                frameBorder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={videoUrl}>
            </iframe>
            <p style={{padding:"2% 20%"}}>{description}</p>
        
        </div>
    )
}

export default TrailerCard
