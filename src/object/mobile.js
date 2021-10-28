import React from 'react'

const mobile = ({mobile}) => {
    return (
        <div>
            <center><h1>mobile List</h1></center>
            {mobile.map((mobile) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{mobile.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{mobile.email}</h6>
                        <p class="card-text">{mobile.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default mobile