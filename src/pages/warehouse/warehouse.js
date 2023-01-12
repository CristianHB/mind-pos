import React, { useState, useEffect } from "react";
import ModalComponent from "../../components/modal/modal";
import Table from "../table/Table";
import FormWarehouse from "../../components/form-warehouse/form-warehouse";
import axios from "axios";

const baseURL = "https://horustech.azurewebsites.net/api/Bodegas?sucursal=57";

export default function Warehouse() {

  const [bodegas, setBodegas] = useState([]);

  useEffect(() => {
      const getBodegas =  async () => {
        const response  = await axios.get(baseURL);
        setBodegas(response.data);
      }
      getBodegas();
  },[]);

  console.log(bodegas);

  const columns = React.useMemo(
    () => [
      {
        Header: "Almacen Principal y Bodegas",
        columns: [
          {
            Header: "Descripcion",
            accessor: "des_Alma",
            sortable: true,
          },
          {
            Header: "Almacen/Bodegas",
            accessor: a => ( a.tipo_Bodega ? "Bodega": "Almacen" ),
            sortable: true,
          },
          {
            Header: "Porcionamiento",
            accessor: a => ( a.fla_Porc ? "Si": "No" ),
            sortable: false,
          },
          {
            Header: "Procesamiento",
            accessor:  a => ( a.fla_Proc ? "Si": "No" ),
            sortable: true,
          },
          {
            Header: "Estado",
            accessor: a => ( a.est_Alma ? "Activo": "Inactivo" ),  
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
  const [modalAddWarehouse, setModalAddWarehouse] = useState(false);
  const [modalEditWarehouse, setModalEditWarehouse] = useState(false);
  const [warehouseEdit, setWarehouseEdit] = useState();
  const [dataWarehouse, setDataWarehouse] = useState([
    {
      description: "RESTAURANTE/BAR",
      estate:"Activo",
      bodega: "Bodega restaurant",
      resolucion: "32342422",
      propina: 74,
      tipoambiente: "single",
    },
    {
      description: "ROPA Y ACCESORIOS",
      estate:"Activo",
      bodega: "Bodega restaurant",
      resolucion: "53543456",
      propina: 34,
      tipoambiente: "single",
    },
  ]);

  const handleEdit = ({ originalRow, rowIndex }) => {
    setWarehouseEdit({ originalRow, rowIndex });
    setModalEditWarehouse(true);
  };

  const addWarehouse = () => {
    return (
      <FormWarehouse
        setDataWarehouse={setBodegas}
        toggle={setModalAddWarehouse}
      />
    );
  };

  const editWarehouse  = () => {
    return (
      <FormWarehouse
        warehouseEdit={warehouseEdit}
        setDataWarehouse={setBodegas}
        toggle={setModalEditWarehouse}
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
      <h1 className="page-header">Almacen Principal y Bodegas </h1>
      <p>Este modulo permite crear los diferentes Almacenes y Bodegas. </p>

      <Table
        columns={columns}
        data={bodegas}
        setOpenModal={setModalAddWarehouse}
        btnAgregar={"Almacenes y Bodegas"}
      />

      <ModalComponent
        isOpen={modalAddWarehouse}
        size={"lg"}
        toggle={setModalAddWarehouse}
        dataModal={addWarehouse}
      />
      {/* <FormUser /> */}

      <ModalComponent
        isOpen={modalEditWarehouse}
        size={"lg"}
        toggle={setModalEditWarehouse}
        dataModal={editWarehouse}
      />
      {/* <FormUser /> */}
    </div>
  );
}
