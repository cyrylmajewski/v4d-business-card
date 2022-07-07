import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import windows from './assets/windows.jpg'
import Card from './Card/Card';
import RefIcon from './RefIcon/RefIcon';

const Info = () => {
  return (
    <>
      &lt;INFOCARD&gt;<br />
      &emsp; &lt;NAME&gt; I.E. VADYM KOVALCHUK &lt;/NAME&gt;<br />
      &emsp; &lt;TITLE&gt; PYTHON/SOLIDITY DEVELOPER &lt;/TITLE&gt;<br />
      &emsp; &lt;WEB&gt; <a href="www.v4d.im" target="_blank">WWW.V4D.IM</a> &lt;/WEB&gt;<br />
      &lt;/INFOCARD&gt;
    </>
  )
}

const Contacts = () => {
  return (
    <>
      &lt;CONTACTS&gt;<br />
      &emsp; &lt;EMAIL&gt; <a href="mailto:email@v4d.im">EMAIL@V4D.IM</a> &lt;/EMAIL&gt;<br />
      &emsp; &lt;MOBILE&gt; <a href="tel:+380733900000">+380733900000</a> &lt;/MOBILE&gt;<br />
      &emsp; &lt;TELEGRAM&gt; <a href="https://telegram.me/v4d1mm">@V4D1MM</a> &lt;/TELEGRAM&gt;<br />
      &lt;/CONTACTS&gt;
    </>
  )
}

function App() {
  const [infoOpened, setInfoOpened] = useState(true);
  const [infoTop, setInfoTop] = useState('33%');
  const [infoLeft, setInfoLeft] = useState('14%');

  const [contactsOpened, setContactsOpened] = useState(true);
  const [contactsTop, setContactsTop] = useState('12%');
  const [contactsLeft, setContactsLeft] = useState('57%');

  return (
    <div className="App">
      <img src={windows} alt="windows" />
      {infoOpened && <Card
        fileName='info.txt'
        CardContent={Info}
        setWindowOpened={setInfoOpened}
        posTop={infoTop}
        posLeft={infoLeft}
        setTop={setInfoTop}
        setLeft={setInfoLeft}
      />}
      {contactsOpened && <Card
        fileName='contacts.txt'
        CardContent={Contacts}
        setWindowOpened={setContactsOpened}
        posTop={contactsTop}
        posLeft={contactsLeft}
        setTop={setContactsTop}
        setLeft={setContactsLeft}
      />}
      <RefIcon fileName='info.txt' openFile={setInfoOpened} />
      <RefIcon fileName='contacts.txt' openFile={setContactsOpened} />
    </div>
  )
}

export default App
