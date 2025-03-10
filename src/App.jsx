import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./component/ContactForm/ContactForm";
import SearchBox from "./component/SearchBox/SearchBox";
import ContactList from "./component/ContactList/ContactList";
import contactArr from "./contactArray.json";
import "./App.css";

function App() {
  const [inputSearchBox, setInputSearchBox] = useState("");
  const [contactArray, setContactArray] = useState(() => {
    const savedContactArray = localStorage.getItem("contactArray");
    return savedContactArray ? JSON.parse(savedContactArray) : contactArr;
  });

  useEffect(() => {
    localStorage.setItem("contactArray", JSON.stringify(contactArray));
  }, [contactArray]);

  const inputSearchBoxChange = (event) => {
    setInputSearchBox(event.target.value);
  };

  const handleDelete = (id) => {
    setContactArray(
      contactArray.filter((contact) => {
        if (contact.id !== id) {
          return contact;
        }
      })
    );
  };

  const showContactArray = !inputSearchBox
    ? contactArray
    : contactArray.filter((contact) =>
        contact.name.toLowerCase().includes(inputSearchBox.toLowerCase())
      );

  const updateContactArray = (values) => {
    setContactArray([
      ...contactArray,
      {
        id: nanoid(),
        name: values.contactName,
        number: values.contactNumber,
      },
    ]);
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={updateContactArray} />
      <SearchBox
        inputValue={inputSearchBox}
        inputHandleChange={inputSearchBoxChange}
      />
      <ContactList
        contactArray={showContactArray}
        contactDelete={handleDelete}
      />
    </div>
  );
}

export default App;
