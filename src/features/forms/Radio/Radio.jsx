import { useState } from "react";
import RadioGroup from "./RadioGroup";
import RadioOption from "./RadioOption";

function Radio() {
  const [selected, setSelected] = useState("");

  return (
    <section>
      <div className="App gray-box">
        <h4>Wie haben Sie von Little Lemon gehört?</h4>
        <RadioGroup name='heardFrom' selected={selected} onChange={setSelected}>
            <RadioOption value='social_media'>Social Media</RadioOption>
            <RadioOption value='friends'>Friends</RadioOption>
            <RadioOption value='advertising'>Advertising</RadioOption>
            <RadioOption value='other'>Others</RadioOption>
        </RadioGroup>
        <p> "{selected}" secildi.</p>
        <button disabled={!selected}>Submit</button>
      </div>
    </section>
  );
}

export default Radio;
