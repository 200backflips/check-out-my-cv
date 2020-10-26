import React from 'react';
import './Contact.scss';
import { SubmitButton } from '../../elements/Buttons/Buttons';
import { ReactComponent as Email } from '../../svg icons/email.svg';
import { ReactComponent as Linkedin } from '../../svg icons/linkedin-fill.svg';
import { ReactComponent as Github } from '../../svg icons/github.svg';
import TextInput from '../../elements/TextInput/TextInput';

const Contact = () => {
  return (
    <div className="Contact">
      <img src="/bgphoto.jpg" alt="background" />
      <h2 id="Contact">Contact</h2>
      <div className="Contact__form">
        <form>
          <TextInput placeholder="name" />
          <TextInput placeholder="email" />
          <TextInput placeholder="phone no." />
          <textarea placeholder="message" />
          <SubmitButton icon={<Email />} title="send" />
        </form>
        <div className="Contact__right-item">
          <div>
            <p>I’m currently a full-time </p>
            <p>employee, but feel free to reach</p>
            <p>out about whatever’s on your mind.</p>
          </div>
          <div className="Contact__links">
            <a
              href="https://www.linkedin.com/in/fredrik-karlsson-560563193/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin />
            </a>
            <span>fredrik-karlsson-560563193</span>
            <a
              href="https://github.com/200backflips"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
            <span>200backflips</span>
          </div>
        </div>
      </div>
      <div className="Contact__footer">
        <p>
          Monster doodles courtesy of{' '}
          <a
            href="https://www.freevector.com/monster-doodle-19774"
            target="_blank"
            rel="noreferrer noopener"
          >
            freevector.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
