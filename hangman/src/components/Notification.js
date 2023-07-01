import React from "react";

const Notification = ({showNotification}) => {
    return (
        <div className={`notification-container ${showNotification ? 'show': ''}`}>
            <p>Oops! Looks like you've already entered that letter.</p>
        </div>
    )
}

export default Notification;
