import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }){
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function selectedContact() {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
            );
            const result = await response.json();
            console.log(result);
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        selectedContact();
      }, []);
      function BackButton() {
        console.log();
        return <button onClick={() => setSelectedContactId(null)}>Back</button>;
      }
    return (
        <>
        <BackButton/>
        </>
    )
}

