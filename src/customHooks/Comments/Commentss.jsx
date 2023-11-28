import React from 'react'

const Commentss = ({item}) => {
    const {id, name, email, body} = item
  return (
    <div className="comment-card">
        <div className="headLine">
            <div className="id">
                <h2>id: {id}</h2>
            </div>
            <div className="perInfo">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
            </div>
        </div>
        <p>{body}</p>
    </div>
  )
}

export default Commentss