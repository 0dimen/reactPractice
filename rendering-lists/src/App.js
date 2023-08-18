import { people } from "./data";
import getImgSrc from "./utils";

function Profile(person){
  return(
    <>
      <img
        className = 'profile'
        src = {getImgSrc(person)}
        alt = {person.name}
        height = {100}
        width = {100}
      />
      <p>
      <b>{person.name}: </b> {person.profession} known for {person.accomplishment}
      </p>
    </>
  );
}

export default function List(){

  const listItems = people.map(person => <li key = {person.id}>{Profile(person)}</li>)
  return(
    <ul>
      {listItems}
    </ul>
  );
}