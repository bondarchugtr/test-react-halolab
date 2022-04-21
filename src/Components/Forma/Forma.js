import React, { useState } from "react";
import s from "./InputPhonebook.module.scss";
import { nanoid } from "nanoid";

const Form = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });
  const handleInputChange = (prev) => {
    const { name, value } = prev.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    onSubmit({ ...contact });
    reset();
  };

  const reset = () => {
    setContact({
      name: "",
      number: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.Forma}>
        <label className={s.nameinput} />
        Name
        <input
          className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="name"
          value={contact.name}
          placeholder="Ivan Petrov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
        <label className={s.nameinput} />
        Number
        <input
          className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="number"
          value={contact.number}
          placeholder="+380990000000"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
        <button type="submit" className={s.Button__form}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default Form;
