import Heading from "./Heading";
import Section from "./Section";

export default function ProfilePage(){
    return(
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title = "Hello travveller!"
                body = "Read about my adventures."
                />
            
        </Section>
    )
}

function Post({ title, body}){
    return(
        <Section isFancy = {true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    );
}