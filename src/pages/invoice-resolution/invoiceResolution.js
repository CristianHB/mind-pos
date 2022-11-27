import React, { useState, useCallback } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";
import FormInvoiceResolution from "../../components/form-invoice-resolution/form-invoice-resolution";

export default function InvoiceResolution() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Facturas",
        columns: [
          {
            Header: "Resolucion",
            accessor: "resolution",
            sortable: true,
          },
          {
            Header: "Fecha Inicial",
            accessor: "datei",
            sortable: true,
          },
          {
            Header: "Fecha Final",
            accessor: "datef",
            sortable: true,
          },
          {
            Header: "Rango Inicial",
            accessor: "rangei",
            sortable: true,
          },
          {
            Header: "Rango Final",
            accessor: "rangef",
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
  const [modalAddInvoiceResolution, setModalAddInvoiceResolution] = useState(false);
  const [modalEditInvoiceResolution, setModalEditInvoiceResolution] = useState(false);
  const [invoiceResolutionEdit, setInvoiceResolutionEdit] = useState();
  const [dataInvoiceResolutions, setDataInvoiceResolutions] = useState([
    {
      resolution: "JKLSWDJRK959",
      datei: "2022-12-03",
      datef: "2022-12-04",
      rangei: 74,
      rangef: 80,
      estate: "Activo"
    },
    {
      resolution: " LSKFJEWPR996",
      datei: "2022-12-05",
      datef: "2022-12-06",
      rangei: 44,
      rangef: 78,
      estate: "Activo"
    },
    {
      resolution: "KVJEINMLR678",
      datei: "2022-12-07",
      datef: "2022-12-08",
      rangei: 34,
      rangef: 68,
      estate: "Activo"
    },
    {
      resolution: "PPOODEID756",
      datei: "2022-12-09",
      datef: "2022-12-10",
      rangei: 69,
      rangef: 90,
      estate: "Activo"
    },
  ]);

  const handleDelete = useCallback(
    (index) => {
      setDataInvoiceResolutions(dataInvoiceResolutions.filter((v, i) => i !== index));
    },
    [dataInvoiceResolutions]
  );
  const handleEdit = ({ originalRow, rowIndex }) => {
    setInvoiceResolutionEdit({ originalRow, rowIndex });
    setModalEditInvoiceResolution(true);
  };

  const addInvoiceResolution = () => {
    return <FormInvoiceResolution setDataInvoiceResolutions={setDataInvoiceResolutions} toggle={setModalAddInvoiceResolution} />;
  };

  const editInvoiceResolution = () => {
    return (
      <FormInvoiceResolution
        invoiceResolutionEdit={invoiceResolutionEdit}
        setDataInvoiceResolutions={setDataInvoiceResolutions}
        toggle={setModalEditInvoiceResolution}
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
      <h1 className="page-header">Resolución de Facturación </h1>
      <p>Este modulo permite ingresar la informacion de la resolucion. </p>
      <Table
        columns={columns}
        data={dataInvoiceResolutions}
        setOpenModal={setModalAddInvoiceResolution}
        btnAgregar={"resolucion de factura"}
      />

      <ModalComponent
        isOpen={modalAddInvoiceResolution}
        size={"lg"}
        toggle={setModalAddInvoiceResolution}
        dataModal={addInvoiceResolution}
      />
      {/* <FormInvoiceResolution /> */}

      <ModalComponent
        isOpen={modalEditInvoiceResolution}
        size={"lg"}
        toggle={setModalEditInvoiceResolution}
        dataModal={editInvoiceResolution}
      />
      {/* <FormInvoiceResolution /> */}
    </div>
  );
}
