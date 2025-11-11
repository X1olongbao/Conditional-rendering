import React from "react"

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState([]) 

  return (
    <div className="notification-banner" role="status" aria-live="polite">
      <div className="notif-icon">M</div>
      <div className="notif-content">
        <div className="notif-title">Messenger</div>
           
          {
            /* Challenge:
            Only display the <h1> below if there are unread messages
            */
           }

           {
            /*
            Challenge:
            If there are 0 unread messages, display a paragraph that says "You
            have no unread messages". (So, the logic will be the opposite of
            what we have for the h1)
            */
           }



          <div>
            
            <h1>You have _ unread messages!</h1>  
            
          </div>


           
        

        </div>
      <div className="notif-time">now</div>
    </div>
  )
}