import React from 'react';

const BaselineForms = (props) => {
  return(
    <div>
      <form action="">
        <fieldset>
          <legend>I am a fieldset legend</legend>
          <p>
            <label htmlFor="">Hi, I'm a label</label>
            <input type="text" />
          </p>
          <p><input type="text" placeholder="I'm an input text field" /></p>
          <p><input type="search" placeholder="I'm an input search field" /></p>
          <p><input type="email" placeholder="I'm an input email field" /></p>

          <p>
            <input type="radio" name="pets" value="cat" defaultChecked /> Cat
            <input type="radio" name="pets" value="dog" /> Dog
            <input type="radio" name="pets" value="both" /> Both
          </p>

          <p><textarea name="" id="" cols="30" rows="10"></textarea></p>

        <p>
            <input type="submit" />
            <input type="button" value="Submit" />
            <button>Submit</button>
          </p>
          <p>
            <input type="submit" disabled />
            <input type="button" value="Submit" disabled />
            <button disabled>Submit</button>
          </p>
        </fieldset>
      </form>
    </div>
  )
}

export default BaselineForms;