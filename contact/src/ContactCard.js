import React, {useState} from 'react';


const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);

    const handleClick = () => {
        setShowAge(!showAge);
    }

    return (
        <div className="contact-card">
            <img className="image" src= {props.avatarUrl} alt="profile"></img>
            <div className="user-details">
                <p className='name' >Name: {props.name} </p>
                <p className='email'>Email: {props.Email} </p>
                <p className='contact'>Contact: {props.number}</p>
                <p className='dob'>D.O.B. : {props.dob}</p>
                <button onClick={handleClick}>
                    Show Age
                </button>
                {showAge && <p className='age'>Age: {props.Age}</p>}
            </div>
        </div>
    )
}

export default ContactCard;