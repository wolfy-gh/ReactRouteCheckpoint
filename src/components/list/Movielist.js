import React from 'react'
import Card from '../card/Moviecard'
import './list.css'



function Movielist(props) {
    return (
        <div>
            <div className="movie_list">
                {props.movies.filter(movies => movies.title.toLowerCase().includes(props.search.toLowerCase())
                                    ).filter(movies => movies.rate>=props.rateSearch
                                        ).map((moviesItem,i) => { 
                    return <Card
                        key={i}
                        id={moviesItem.id}
                        title={moviesItem.title}
                        postUrl={moviesItem.postUrl}
                        description={moviesItem.description}
                        rate={moviesItem.rate}
                    />
                })}
            </div>
        </div>
    )
}

export default Movielist
