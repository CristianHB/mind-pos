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
      console.log(ambienInfo);
      setDataAmbient((prevState) => [...prevState, ambienInfo]);
    }
    toggle((prevState) => !prevState);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label
            htmlFor="descripcion"
            className="form-label col-form-label col-md-3"
          >
            Descripcion
          </label>
          <div className="col-md-8">
            <input
              name="descripcion"
              type="text"
              className="form-control form-control-lg"
              {...register("descripcion")}
              placeholder="Ingresa tu descripcion"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="bodega"
            className="form-label col-form-label col-md-3"
          >
            Bodega
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="bodega"
              {...register("bodega")}
              placeholder="Ingresa la bodega"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="resolucion"
            className="form-label col-form-label col-md-3"
          >
            Resolucion
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="resolucion"
              {...register("resolucion")}
              placeholder="Ingresa la resolucion"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="propina"
            className="form-label col-form-label col-md-3"
          >
            Propina
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="propina"
              {...register("propina")}
              placeholder="Ingresa propina"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="tipoambiente"
            className="form-label col-form-label col-md-3"
          >
            Tipo ambiente
          </label>
          <div className="col-md-8">
            <select
              className="form-select"
              name="tipoambiente"
              {...register("tipoambiente")}
              placeholder="Ingresa tu tipo de ambiente"
            />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
