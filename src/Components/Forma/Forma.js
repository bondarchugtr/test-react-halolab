import React, { useState } from "react";
import { nanoid } from "nanoid";
import s from "./Forma.module.scss";
import ButtonOrder from "../Button/ButtonOrder/ButtonOrder";
const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const [contactsArr, setContactsArr] = useState([]);
  const [nameInput, setNameInput] = useState(false);
  const [numberInput, setNumberInput] = useState(false);
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const checkNumber = (str) => {
    return str
      .split(" ")
      .map((value) => {
        return !isNaN(value);
      })
      .find((el) => el === true);
  };

  const handleInputChange = (prev) => {
    const { name, value } = prev.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    if (nameError !== "" || contact.name === "") {
      setNameInput(true);
      setNameError("Fill in required fields");
      console.log("first");
    } else if (numberError !== "" || contact.number === "") {
      setNumberInput(true);
      setNumberError("Fill in required fields");
    } else {
      setContactsArr({ ...contact });
      reset();
    }
  };

  const handlerBlurName = () => {
    setNameInput(true);
    setNameFocus(false);
    if (checkNumber(contact.name) !== undefined) {
      setNameError("Only letters allowed");
    } else if (!contact.name) {
      setNameError("This field in required");
    } else {
      setNameError("");
    }
  };

  const handlerFocusName = () => {
    setNameFocus(true);
    setNameError("");
  };

  const handlerBlurNumber = () => {
    setNumberInput(true);
    setNumberFocus(false);
    if (contact.number.length < 13 || contact.number.length > 13) {
      setNumberError("Should contain 13 characters");
      if (!contact.number) {
        setNumberError("This field in required");
      }
    } else {
      setNumberError("");
    }
  };

  const handlerFocusNumber = () => {
    setNumberFocus(true);
    setNumberError("");
  };

  const reset = () => {
    setContact({
      name: "",
      number: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.forma}>
        {nameError && <label className={s.error}>{nameError}</label>}

        <input
          className={
            s.forma__input +
            " " +
            (contact.name.length >= 1 && nameFocus === false ? s.valid : "") +
            " " +
            (nameError.length > 0 ? s.err : "") +
            (nameFocus === true ? s.formInput : "")
          }
          id={nanoid()}
          type="text"
          name="name"
          value={contact.name}
          placeholder="Ivan Shevchenko"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleInputChange}
          onBlur={handlerBlurName}
          onFocus={handlerFocusName}
        />
        {numberInput && numberError && (
          <label className={s.error}>{numberError}</label>
        )}
        <input
          className={
            s.forma__input +
            " " +
            (contact.number.length === 13 && numberFocus === false
              ? s.valid
              : "") +
            " " +
            (numberError.length > 0 ? s.err : "") +
            (numberFocus === true ? s.formInput : "")
          }
          id={nanoid()}
          type="text"
          name="number"
          value={contact.number}
          placeholder="+380990000000"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          onChange={handleInputChange}
          onBlur={handlerBlurNumber}
          onFocus={handlerFocusNumber}
        />

        <>
          <ButtonOrder />
        </>
      </form>
    </>
  );
};

export default Form;
