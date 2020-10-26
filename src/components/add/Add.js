import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './add.css'
import './star.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { FaStar } from 'react-icons/fa'


function Add(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie, setMovie] = useState({
        id:"",
        title: "",
        postUrl: "",
        description: "",
        rate: "",
    })
    function handleChange(e) {
        const { name, value } = e.target
        setMovie(prevMovie => {
            return {
                ...prevMovie,
                [name]: value
            }
        })
    }
    console.log(props.newId)
    function submitMovie(e) {
        e.preventDefault()
        props.onAdd(movie)
        movie.id = props.newId
        handleClose()
        setMovie(movie => {return movie={
            title:"",
            description:"",
            postUrl:"",
            videoUrl:"",
            rate:""
        }})
    }


    return (
        <div className="add_movies">
            <button onClick={handleShow}>
                <AddBoxIcon /> Add
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="add_header" closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input onChange={handleChange} name="title" value={movie.title} placeholder="Movie Title" />
                        <input onChange={handleChange} name="postUrl" value={movie.postUrl} placeholder="Movie PostURL" />
                        <input onChange={handleChange} name="videoUrl" value={movie.videoUrl} placeholder="Movie videoURL" />
                        <textarea name="description" onChange={handleChange} value={movie.description} placeholder="Description" />
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return <label key={i}>
                                <input type="radio" name="rate" value={ratingValue} onChange={handleChange} />
                                <FaStar size={30} className="star" color={ratingValue <= movie.rate ? "goldenrod" : "gray"} />
                            </label>
                        })}
                        <button type="submit" onClick={submitMovie}>Add</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Add
