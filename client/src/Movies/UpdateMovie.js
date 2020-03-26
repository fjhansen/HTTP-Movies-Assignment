import React, { useState, useEffect } from "react"
import api from "../utils/api"
import {useRouteMatch, useHistory} from "react-router-dom"

function UpdateMovie(props) {
  const [movie, setMovie] = useState({
    id: "",
    name: "",
    email: "",
  })
}

useEffect(() => {
  api()
    .get(`/api/friends/${props.match.params.id}`)
    .then((result) => {
      setUser(result.data)
    })
    .catch((error) => {
      console.log(error)
    })
}, [props.match.params.id])

const handleChange = (event) => {
  setMovie({
    ...movie,
    [event.target.name]: event.target.value,
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  console.log("HANDLE SUBMIT:", movie)
  api()
  .put(`/api/movies/${movie.id}`, movie)
  .then(result => {
    // props.history.push("/")
  })
  .catch(error => {
    console.log("ERROR: ",error)
  })
}
return (
  <>
  <h1>Edit Movie</h1>
  </>
/////////////refractoring
)


export default UserUpdate