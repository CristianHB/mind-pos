import React, { useState, useCallback } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";

export default function Sectors() {
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
  const [modalAddSector, setModalAddSector] = useState(false);
  const [modalEditSector, setModalEditSector] = useState(false);
  const [sectorEdit, setSectorEdit] = useState();
  const [dataSectors, setDataSectors] = useState([
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
      setDataSectors(dataSectors.filter((v, i) => i !== index));
    },
    [dataSectors]
  );

  const handleEdit = ({ originalRow, rowIndex }) => {
    setSectorEdit({ originalRow, rowIndex });
    setModalEditSector(true);
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
        data={dataSectors}
        setOpenModal={setModalAddSector}
        btnAgregar={"Sector"}
      />

      <ModalComponent
        isOpen={modalAddSector}
        size={"lg"}
        toggle={setModalAddSector}
        setData={setDataSectors}
      />
      {/* <FormUser /> */}

      <ModalComponent
        isOpen={modalEditSector}
        size={"lg"}
        toggle={setModalEditSector}
        edit={sectorEdit}
        setData={setDataSectors}
      />
      {/* <FormUser /> */}
    </div>
  );
}
