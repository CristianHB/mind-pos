import React, { useState, useCallback } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";
import FormUser from "../../components/form-user/form-user";

export default function Users() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            sortable: true,
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            sortable: true,
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            sortable: true,
          },
          {
            Header: "Visits",
            accessor: "visits",
            sortable: true,
          },
          {
            Header: "Status",
            accessor: "status",
            sortable: true,
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
            sortable: true,
          },
          {
            Header: "Action",
            id: "action",
            accessor: (originalRow, rowIndex) => {
              return (
                <div>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit({ originalRow, rowIndex })}
                    className="fas fa-pencil-alt fa-fw"
                  ></i>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(rowIndex)}
                    className="fas fa-lg fa-fw me-10px fa-trash-can"
                  ></i>
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [userEdit, setUserEdit] = useState();
  const [dataUsers, setDataUsers] = useState([
    {
      age: 13,
      firstName: "Cristian",
      lastName: "Hernandez",
      progress: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      age: 15,
      firstName: "Esteban",
      lastName: "Barrero",
      progress: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      age: 17,
      firstName: "Nicolas",
      lastName: "Martinez",
      progress: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      age: 19,
      firstName: "Nena",
      lastName: "Saenz",
      progress: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
  ]);

  const handleDelete = useCallback(
    (index) => {
      setDataUsers(dataUsers.filter((v, i) => i !== index));
    },
    [dataUsers]
  );
  const handleEdit = ({ originalRow, rowIndex }) => {
    setUserEdit({ originalRow, rowIndex });
    setModalEditUser(true);
  };

  const addUser = () => {
    return <FormUser setDataUsers={setDataUsers} toggle={setModalAddUser} />;
  };

  const editUser = () => {
    return (
      <FormUser
        userEdit={userEdit}
        setDataUsers={setDataUsers}
        toggle={setModalEditUser}
      />
    );
  };

  return (
    <div>
      {/* <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item">
          <Link to="/table/data">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/table/data">Tables</Link>
        </li>
        <li className="breadcrumb-item active">Data Tables</li>
      </ol> */}
      <h1 className="page-header">Usuarios </h1>

      <Table
        columns={columns}
        data={dataUsers}
        setOpenModal={setModalAddUser}
        btnAgregar={"Usuario"}
      />

      <ModalComponent
        isOpen={modalAddUser}
        size={"lg"}
        toggle={setModalAddUser}
        dataModal={addUser}
      />
      {/* <FormUser /> */}

      <ModalComponent
        isOpen={modalEditUser}
        size={"lg"}
        toggle={setModalEditUser}
        dataModal={editUser}
      />
      {/* <FormUser /> */}
    </div>
  );
}
