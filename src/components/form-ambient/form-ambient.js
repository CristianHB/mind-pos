import React from "react";
import { useForm } from "react-hook-form";

export default function FormAmbient({ ambientEdit, setDataAmbient, toggle }) {
  const data = ambientEdit?.originalRow;
  const rowIndex = ambientEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  const onSubmit = (ambienInfo) => {
    if (data) {
      setDataAmbient((prevState) =>
        prevState.map((item, index) => {
          if (index === rowIndex) {
            return (prevState[index] = ambienInfo);
          } else {
            return item;
          }
        })
      );
    } else {
      // console.log(ambienInfo);
      setDataAmbient((prevState) => [...prevState, ambienInfo]);
    }
    toggle(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label
            htmlFor="description"
            className="form-label col-form-label col-md-3"
          >
            Descripcion
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.description}
              name="description"
              type="text"
              className="form-control form-control-lg"
              {...register("description")}
              placeholder="Ingresa tu descripcion"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="cellar"
            className="form-label col-form-label col-md-3"
          >
            Bodega
          </label>
          <div className="col-md-8">
            <select 
              defaultValue={data?.bodega}
              className="form-select"
              name="cellar"
              {...register("cellar")}
              placeholder="Ingresa la bodega"
            >
              <option value="1">Bodega Principal</option>
              <option value="2">Bodega restaurant</option>
            </select>  
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="resolution"
            className="form-label col-form-label col-md-3"
          >
            Resolucion
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="resolution"
              {...register("resolution")}
              placeholder="Ingresa la resolucion"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="tip" className="form-label col-form-label col-md-3">
            Propina
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="tip"
              {...register("tip")}
              placeholder="Ingresa propina"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="ambientType"
            className="form-label col-form-label col-md-3"
          >
            Tipo ambiente
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="ambientType"
              {...register("ambientType")}
              placeholder="Ingresa tu tipo de ambiente"
            />
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
              className="form-select"
              name="estate"
              {...register("estate")}
              placeholder="Ingresa tu tipo de ambiente"
            >
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
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
