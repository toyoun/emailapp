import React from 'react';

const CreatePage = () => (
  <div>
    <form>
      <div>
        <label htmlFor="to" className="create-section">
          To:
          <input placeholder="john@example.com" type="email" id="to" className="textbox" required />
        </label>
      </div>
      <div>
        <label htmlFor="subject" className="create-section">
          Subject:
          <input type="text" id="subject" className="textbox" required />
        </label>
      </div>
      <div className="create-section">
        <textarea placeholder="Type your message here" id="newMsg" className="textbox" required />
      </div>
    </form>
    <div className="button-bottom">
      <button className="send" type="submit">Send</button>
    </div>
  </div>
);

export default CreatePage;