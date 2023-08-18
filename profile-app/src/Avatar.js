import getImagerUrl from "./utils";

export default function Profile({person, size, explan}){
    return (
        <section className = "profile">
            <h2>{person.name}</h2>
            <img
                className = "avatar"
                src={getImagerUrl(person.imageId)}
                alt = {person.name}
                width = {size}
                height = {size}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {explan.ProfessionEx}
                </li>
                <li>
                    <b>Award: {explan.AwardNum}</b>
                    {explan.AwardEx}
                </li>
                <li>
                    <b>Discovered: </b>
                    {explan.DiscoverEx}
                </li>
            </ul>
        </section>
    );
}

