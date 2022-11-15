import { useState } from "react";
import AnswersList from "./AnswersList";
import AnswersItem from "./AnswersItem";

const initialFormState = {
  color: "",
  review: "",
  username: "",
  email: "",
  spendTime: [],
};

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialFormState);
  const [answerList, setAnswerList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitted:", formState);
    setAnswerList([...answerList, formState]);

    setFormState(initialFormState);
  };
  console.log("answers", answerList);
  console.log("state:", formState);
  const handleChange = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    const targetType = event.target.type;
    const targetChecked = event.target.checked;
    console.log(targetType, targetName, targetValue, targetChecked);
    if (targetName === "color" && targetType === "radio") {
      setFormState({ ...formState, color: targetValue });
    }
    if (targetName === "spend-time" && targetType === "checkbox") {
      if (formState.spendTime.includes(targetValue)) {
        return;
      } else {
        setFormState({
          ...formState,
          spendTime: [...formState.spendTime, targetValue],
        });
      }
    }
    if (targetName === "review") {
      setFormState({ ...formState, review: targetValue });
    }
    if (targetName === "username") {
      setFormState({ ...formState, username: targetValue });
    }
    if (targetName === "email") {
      setFormState({ ...formState, email: targetValue });
    }
  };
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answerList} />
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <form class="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*<!-- Radio inputs go here -->*/}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={formState.color === "1"}
                  onChange={handleChange}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formState.color === "2"}
                  onChange={handleChange}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formState.color === "3"}
                  onChange={handleChange}
                />
                <label
                  for="color-three"
                  checked={formState.color}
                  onChange={handleChange}
                >
                  3
                </label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formState.color === "4"}
                  onChange={handleChange}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here -->*/}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={formState.spendTime.includes("swimming")}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    checked={formState.spendTime.includes("bathing")}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={formState.spendTime.includes("chatting")}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    checked={formState.spendTime.includes("noTime")}
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
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
              value={formState.review}
              onChange={handleChange}
            >
              {" "}
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
          <input
            class="form__submit"
            type="submit"
            value="Submit Survey!"
            onSubmit={handleSubmit}
          />
        </form>
      </section>
    </main>
  );
}

export default Main;