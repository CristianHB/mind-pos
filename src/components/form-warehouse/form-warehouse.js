import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const postBodegasUrl = "https://horustech.azurewebsites.net/api/Bodegas";

export default function FormAmbient({
  warehouseEdit,
  setWarehouseEdit,
  toggle,
}) {
  const data = warehouseEdit?.originalRow;
  const rowIndex = warehouseEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  // const onSubmit = (warehouseInfo) => {
  //   if (data) {
  //     setWarehouseEdit((prevState) =>
  //       prevState.map((item, index) => {
  //         if (index === rowIndex) {
  //           return (prevState[index] = warehouseInfo);
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   } else {
  //      console.log(warehouseInfo);
  //     setWarehouseEdit((prevState) => [...prevState, warehouseInfo]);
  //   }
  //   toggle(false);
  // };

  const onSubmit = (warehouseInfo) => {
    var today = new Date();

    warehouseInfo.cod_Alma = 0;
    warehouseInfo.cod_Sucu = 57;
    warehouseInfo.fec_Crea = today.toISOString();
    warehouseInfo.usu_Crea = 122;
    warehouseInfo.est_Alma = JSON.parse(warehouseInfo.est_Alma);
    warehouseInfo.fla_Porc = JSON.parse(warehouseInfo.fla_Porc);
    warehouseInfo.fla_Proc = JSON.parse(warehouseInfo.fla_Proc);
    warehouseInfo.tipo_Bodega = JSON.parse(warehouseInfo.tipo_Bodega);

    console.log(warehouseInfo);

    axios
      .post(postBodegasUrl, { warehouseInfo })
      .then(function (response) {
        console.log(response);
        Swal.fire({
          title: "Datos enviados",
          confirmButtonColor: "#00acac",
        });
      })
      .catch(function (error) {
        Swal.fire({
          title: "Ocurrio un error",
          confirmButtonColor: "#00acac",
        });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label
            htmlFor="des_Alma"
            className="form-label col-form-label col-md-3"
          >
            Descripcion
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.des_Alma}
              name="des_Alma"
              type="text"
              className="form-control form-control-lg"
              {...register("des_Alma")}
              placeholder="Ingresa tu descripcion"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="tipo_Bodega"
            className="form-label col-form-label col-md-3"
          >
            Almacen/Bodegas
          </label>
          <div className="col-md-8">
            <select
              defaultValue={data?.tipo_Bodega}
              className="form-select"
              name="tipo_Bodega"
              {...register("tipo_Bodega")}
              placeholder="Ingresa la bodega"
            >
              <option value={false}>Almacen</option>
              <option value={true}>Bodega</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="resolution"
            className="form-label col-form-label col-md-3"
          >
            Porcionamiento
          </label>
          <div className="col-md-8">
            <select
              defaultValue={data?.fla_Porc}
              className="form-select"
              name="fla_Porc"
              {...register("fla_Porc")}
              placeholder="Ingresa el tipo de Porcionamiento"
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="tip" className="form-label col-form-label col-md-3">
            Procesamiento
          </label>
          <div className="col-md-8">
            <select
              defaultValue={data?.fla_Proc}
              className="form-select"
              name="fla_Proc"
              {...register("fla_Proc")}
              placeholder="Ingresa el tipo de Procesamiento"
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="estate"
            className="form-label col-form-label col-md-3"
          >
            Estado
          </label>
          <div className="col-md-8">
            <select
              defaultValue={data?.est_Alma}
              className="form-select"
              name="est_Alma"
              {...register("est_Alma")}
              placeholder="Ingresa el estado"
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
