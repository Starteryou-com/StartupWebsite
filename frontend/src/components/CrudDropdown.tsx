import React from "react";
import {Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type CrudDropdownProps = {
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const CrudDropdown: React.FC<CrudDropdownProps> = ({
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <Dropdown style={{position: "absolute", top: "10px", right: "10px"}}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={onAdd}>Add Job</Dropdown.Item>
        <Dropdown.Item onClick={onEdit}>Edit Job</Dropdown.Item>
        <Dropdown.Item onClick={onDelete}>Delete Job</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CrudDropdown;
