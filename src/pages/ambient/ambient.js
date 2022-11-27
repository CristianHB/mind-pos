import React, { useState } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";
import FormAmbient from "../../components/form-ambient/form-ambient";

export default function Ambient() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Ambientes",
        columns: [
          {
            Header: "Ambiente",
            accessor: "descripcion",
            sortable: true,
          },
          {
            Header: "Estado",
            accessor: "estate",
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
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );
  const [modalAddAmbient, setModalAddAmbient] = useState(false);
  const [modalEditAmbient, setModalEditAmbient] = useState(false);
  const [ambientEdit, setAmbientEdit] = useState();
  const [dataAmbient, setDataAmbient] = useState([
    {
      descripcion: "RESTAURANTE/BAR",
      estate:"Activo",
      bodega: "FD444",
      resolucion: "32342422",
      propina: 74,
      tipoambiente: "single",
    },
    {
      descripcion: "ROPA Y ACCESORIOS",
      estate:"Activo",
      bodega: "XX455",
      resolucion: "53543456",
      propina: 34,
      tipoambiente: "single",
    },
  ]);

  const handleEdit = ({ originalRow, rowIndex }) => {
    setAmbientEdit({ originalRow, rowIndex });
    setModalEditAmbient(true);
  };

  const addAmbient = () => {
    return (
      <FormAmbient
        setDataAmbient={setDataAmbient}
        toggle={setModalAddAmbient}
      />
    );
  };

  const editAmbient = () => {
    return (
      <FormAmbient
        ambientEdit={ambientEdit}
        setDataAmbient={setDataAmbient}
        toggle={setModalEditAmbient}
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
      <h1 className="page-header">Ambientes </h1>
      <p>Este modulo permite crear los diferentes Ambientes. </p>

      <Table
        columns={columns}
        data={dataAmbient}
        setOpenModal={setModalAddAmbient}
        btnAgregar={"Ambiente"}
      />

      <ModalComponent
        isOpen={modalAddAmbient}
        size={"lg"}
        toggle={setModalAddAmbient}
        dataModal={addAmbient}
      />
      {/* <FormUser /> */}

      <ModalComponent
        isOpen={modalEditAmbient}
        size={"lg"}
        toggle={setModalEditAmbient}
        dataModal={editAmbient}
      />
      {/* <FormUser /> */}
    </div>
  );
}
