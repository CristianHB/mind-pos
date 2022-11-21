import React, { useState, useCallback } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";
import FormSector from "../../components/form-sector/form-sector";

export default function Sectors() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Info",
        columns: [
          {
            Header: "Descripcion",
            accessor: "description",
            sortable: true,
          },
          {
            Header: "Bodega",
            accessor: "cellar",
            sortable: true,
          },
          {
            Header: "Resolucion",
            accessor: "resolution",
            sortable: true,
          },
          {
            Header: "Propina",
            accessor: "tip",
            sortable: true,
          },
          {
            Header: "Estado",
            accessor: "status",
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
      description: 13,
      cellar: "Cristian",
      resolution: "Hernandez",
      tip: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      description: 15,
      cellar: "Esteban",
      resolution: "Barrero",
      tip: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      description: 17,
      cellar: "Nicolas",
      resolution: "Martinez",
      tip: 74,
      status: "single",
      subRows: undefined,
      visits: 27,
    },
    {
      description: 19,
      cellar: "Nena",
      resolution: "Saenz",
      tip: 74,
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

  const addAmbient = () => {
    return (
      <FormSector setDataSector={setDataSectors} toggle={setModalAddSector} />
    );
  };

  const editAmbient = () => {
    return (
      <FormSector
        sectorEdit={sectorEdit}
        setDataSector={setDataSectors}
        toggle={setModalEditSector}
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
      <h1 className="page-header">Sectores </h1>

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
        dataModal={addAmbient}
      />
      {/* <FormUser /> */}

      <ModalComponent
        isOpen={modalEditSector}
        size={"lg"}
        toggle={setModalEditSector}
        dataModal={editAmbient}
      />
      {/* <FormUser /> */}
    </div>
  );
}
