import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [state, setState] = useState({
    color: "",
    timeSpent: [],
    aboutDuck: "",
    name: "",
    email: ""
  }); //Ignore this state
  const [answersList, setAnswerList] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswerList([...answersList, state])
    event.target.reset()
    
  }
    


console.log("state ", state)
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList}/>
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <form className="form" onSubmit={(event)=> handleSubmit(event)}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input 
                id="color-one" 
                type="radio" 
                name="color" 
                value="1" 
                onClick={(e) => setState({ ...state, color: e.target.value })} />
                <label for="color-one">1</label>
              </li>
              <li>
                <input 
                id="color-two" 
                type="radio" 
                name="color" 
                value="2"
                onClick={(e) => setState({ ...state, color: e.target.value })} />
                <label for="color-two">2</label>
              </li>
              <li>
                <input 
                id="color-three" 
                type="radio" 
                name="color" 
                value="3"
                onClick={(e) => setState({ ...state, color: e.target.value })} />
                <label for="color-three">3</label>
              </li>
              <li>
                <input 
                id="color-four" 
                type="radio" 
                name="color" 
                value="4"
                onClick={(e) => setState({ ...state, color: e.target.value })} />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            <ul>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="swimming"
                  onClick={(e) => setState({ ...state, timeSpent: e.target.value })} />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="bathing"
                  onClick={(e) => setState({ ...state, timeSpent: e.target.value })} />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="chatting"
                  onClick={(e) => setState({ ...state, timeSpent: e.target.value })} />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="noTime"
                  onClick={(e) => setState({ ...state, timeSpent: e.target.value })} />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea 
            name="review" 
            cols="30" 
            rows="10"
            value={state.aboutDuck}
            onChange={(event) => setState({...state, aboutDuck: event.target.value})}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
            type="text" 
            name="username"
            value={state.name}
            onChange={(event) => setState({...state, name: event.target.value})} />
          </label>
          <label>
            Leave us your email pretty please??
            <input 
            type="email" 
            name="email" 
            value={state.email}
            onChange={(event) => setState({...state, email: event.target.value})} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
