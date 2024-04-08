import { Form } from "react-bootstrap";

interface Props {
  list: string[];
  onSearchChanged: any;
}

const SearchBar = ({ list, onSearchChanged }: Props) => {
  const handleInputChange = (e: any) => {
    e.preventDefault();
    updateList(e.target.value);
  };

  const updateList = (input: any) => {
    if (input.length <= 0) {
      onSearchChanged(list);
      return;
    }

    console.log(input);
    list = list.filter((item: any) => {
      return JSON.parse(item).name.match(input);
    });
    onSearchChanged(list);
  };

  return (
    <>
      <Form data-bs-theme="dark" className="m-4 my-5">
        <Form.Control
          type="search"
          placeholder="Search"
          className="w-50"
          onChange={handleInputChange}
        />
      </Form>
    </>
  );
};

export default SearchBar;
