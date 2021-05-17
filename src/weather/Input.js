import {  useEffect, useRef } from "react";
import {Form, Label, InputText} from './components/components'
const Input = ({ value, handleChangeSearch, handleEnterInput, children }) => {
  const inputSearch = useRef();
  useEffect(() => {
    inputSearch.current.focus();
  }, []);
  return (
    <>
      <Form onSubmit={(event) => handleEnterInput(event)}>
        <Label htmlFor="weather__search-input">
          <i className="fas fa-search"></i>
        </Label>
        <InputText
          id="weather__search-input"
          placeholder="Tìm kiếm theo tên thành phố..."
          value={value}
          onChange={(event) => handleChangeSearch(event)}
          ref={inputSearch}
          autoComplete="off"
        />
      </Form>
      {children}
    </>
  );
};

export default Input;
