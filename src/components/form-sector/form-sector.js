import React from "react";
import { useForm } from "react-hook-form";

export default function FormSector({ sectorEdit, setDataSector, toggle }) {
  const data = sectorEdit?.originalRow;
  // console.log(data);
  const rowIndex = sectorEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  const onSubmit = (ambienInfo) => {
    if (data) {
      setDataSector((prevState) =>
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
      setDataSector((prevState) => [...prevState, ambienInfo]);
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
              defaultValue={data?.cellar}
              className="form-select"
              name="cellar"
              {...register("cellar")}
              placeholder="Ingresa la bodega"
            />
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
              defaultValue={data?.resolution}
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
              defaultValue={data?.tip}
              className="form-select"
              name="tip"
              {...register("tip")}
              placeholder="Ingresa propina"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="status"
            className="form-label col-form-label col-md-3"
          >
            Tipo sector
          </label>
          <div className="col-md-8">
            <select
              defaultValue={data?.status}
              className="form-select"
              name="status"
              {...register("status")}
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
