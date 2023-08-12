
import './App.css';
import { name, obj, data, } from "././components/variable/variable";
import { Answer, Section, UserCollection } from './components/sectioncomponent/section';



function App() {

  return (
    <>
      <div className="App">
        <div>
          <h4>Question No1</h4>
          <p>{name}</p>
          <p>{obj.name}</p>
          {data.map((v, i) =>

            <p key={i}>{v}</p>
          )}
        </div>
      </div>
      <Section />
      <Answer />
      <UserCollection />

    </>
  );
}

export { App };
