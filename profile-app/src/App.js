import Profile from "./Avatar";

export default function Gallery(){
  return(
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        person = {{imageId :'szV5sdG', name:'Maria Skłodowska-Curie'}} 
        size = {70} 
        explan = {{
          ProfessionEx : 'Physicist and chemist',
          AwardNum : '4',
          AwardEx : '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', 
          DiscoverEx : 'polonium (element)'
        }}/>
      <Profile 
      person = {{imageId :'YfeOqp2', name:'Katsuko Saruhashi'}} 
      size = {70} 
      explan = {{
        ProfessionEx : 'geochemist',
        AwardNum : '2',
        AwardEx : '(Miyake Prize for geochemistry, Tanaka Prize)', 
        DiscoverEx : 'a method for measuring carbon dioxide in seawater'
      }}/>
    </div>
  )
}
