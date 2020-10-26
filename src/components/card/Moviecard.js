import React from 'react'
import './card.css'
import {FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Moviecard({id,title, postUrl, description, rate}) {
    return (
        <Link className="movie_card" to={`/${id}`}>
            <img src={postUrl} alt="movie " />
            <div className="movie_head">
                <h3>{title}</h3>
                {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return <label key={i}>
                                            <input type="radio" name="rate" value={ratingValue}/>
                                            <FaStar className="star-p" color={ratingValue <= rate ? "goldenrod": "gray"} />
                                    </label>
                        })}
            </div>
            <p>{description}</p>
        </Link>
    )
}

export default Moviecard
