import React from 'react'
import Trailer from '../trailerCard/TrailerCard'


function trailer({match,movies}) {
    // var movieData 
    // for(let i=0; i <movies.length; i++){
    //     if(movies[i].id == match.params.id){
    //         movieData = <Trailer 
    //                             key={i}
    //                             id={movies[i].id} 
    //                             title={movies[i].title} 
    //                             description={movies[i].description} 
    //                             videoUrl={movies[i].videoUrl} 
    //                     />
    //     }
        
    // }
    var movieDetails = movies.find(m => m.id == match.params.id)
    var detailsData
    if(movieDetails){
        detailsData = <Trailer 
                            description={movieDetails.description} 
                            videoUrl={movieDetails.videoUrl} 
                    />
    }else {
        detailsData = <h2 style={{textAlign:'center', height:'100vh'}}>Sorry !! Movie doesn't exist .</h2>
    }


    return (
        <div>
            {detailsData}
        </div>
    )
}

export default trailer
