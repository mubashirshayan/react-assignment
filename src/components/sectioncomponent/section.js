import { list, complex, userData } from ".././variable/variable"
import Card from 'react-bootstrap/Card';
function Answer() {

  return (
    <div className="doubleSec">


      <div>
        <h3>Qusestion 3</h3>
        <h2>import Something from ‘package’</h2>
        <p>`This is a something default import:
          package.js
          import num from 'anyPackage'

          It only works if anyPackage contains a something default export:

          anyPackage.js
          export default 1

          In this case it doesnt matter what name you assign to it when importing:

          // package.js
          import num from 'anyPackage'
          import Mynum from ' anyPackage'
          import something from 'anyPackage'

          Because it will always resolve to whatever is the something default export of anyPackage.`

        </p>
      </div>


      <div>
        <h2>import "{"Something"}" from ‘package’</h2>
        <p>`This is a something import called anyPackage:

          import num from 'anyPackage'

          It only works if anyPackage contains a something export called anyPackage:

          export const num = 1

          In this case the name matters because youre importing a specific thing by its export name:

          // package.js
          import num from 'anyPackage'
          import mynum from 'anyPackage' // Doesn't work!
          import something from 'anyPackage' // Doesn't work!

          To make these work, you would add a corresponding something export to anyPackage:

          // anyPackage.js
          export const num= 1
          export const mynum = 2
          export const something = 3`</p>
      </div>
    </div>
  );
}
function Section() {

  return (

    <div className="section">


      <div>
        <h4>Question No2</h4>


        {list.map((v, i) =>
          <p key={i}>{v.name}</p>
        )}
      </div>
      <div>
        <h4>Question No2</h4>

      {complex.map((v, i) =>
          <p key={i}>Company{v.company}Jobs<br></br>{v.jobs}`</p>
       
        )}
      </div>



    </div>


  );
}


function UserCollection() {
  return (
    <>
    <div className="collection">
      {userData.map((v,i)=>
       
    
         <Card style={{ width: '18rem' }} className="userCard">
         <Card.Body>
           <Card.Title key={i}>{v.name}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted" >{v.phone}</Card.Subtitle>
           <Card.Text >
              {v.email}
           </Card.Text>
           <Card.Text >
              {v.website}
           </Card.Text>
         </Card.Body>
        </Card>
       
      )}
         

       
    </div>
    </>
  )
    

  
}
export { Answer, Section, UserCollection };