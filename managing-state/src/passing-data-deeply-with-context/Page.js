import Heading from "./Heading";
import Section from "./Section";

// Section에서 level 값을 지정하기 때문에, Section 함수 이외의 구역에서 level 값을 설정하는 것은 Section level에 영향을 미치지 않는다.(단, Context를 변경하면 영향이 있다.)

export default function Page(){
    return(
        <Section>
            <Heading>Title</Heading>
            <Section level = {-10}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}