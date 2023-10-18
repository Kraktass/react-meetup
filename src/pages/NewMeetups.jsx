import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm"


export default function NewMeetupPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch('https://react-getting-started-a7a90-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application-json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
    
  }

  return <section>
    <h1>Add new meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>
}
