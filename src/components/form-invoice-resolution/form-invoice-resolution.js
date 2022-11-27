import React from "react";
import { useForm } from "react-hook-form";

export default function FormInvoiceResolution({ invoiceResolutionEdit, setDataInvoiceResolutions, toggle }) {
  const data = invoiceResolutionEdit?.originalRow;
    console.log(data);
  const rowIndex = invoiceResolutionEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  const onSubmit = (ambienInfo) => {
    if (data) {
        setDataInvoiceResolutions((prevState) =>
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
      setDataInvoiceResolutions((prevState) => [...prevState, ambienInfo]);
    }
    toggle(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label
            htmlFor="resolution"
            className="form-label col-form-label col-md-3"
          >
            Resolucion
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.resolution}
              name="resolution"
              type="text"
              className="form-control form-control-lg"
              {...register("resolution")}
              placeholder="Ingresa tu resolution"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="datei"
            className="form-label col-form-label col-md-3"
          >
            Fecha inicial
          </label>
          <div className="col-md-8">
          <input
              defaultValue={data?.datei}
              className="form-control form-control-lg"
              type="date"
              name="datei"
              {...register("datei")}
              placeholder="Ingresa la fecha inicial"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="datef"
            className="form-label col-form-label col-md-3"
          >
            Fecha final
          </label>
          <div className="col-md-8">
          <input
               defaultValue={data?.datef}
              className="form-control form-control-lg"
              type="date"
              name="datef"
              {...register("datef")}
              placeholder="Ingresa la fecha final"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="rangei"
            className="form-label col-form-label col-md-3"
          >
            Rango inicial
          </label>
          <div className="col-md-8">
          <input
              defaultValue={data?.rangei}
              className="form-control form-control-lg"
              type="number"
              name="rangei"
              {...register("rangei")}
              placeholder="Ingresa el rango inicial"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="rangef"
            className="form-label col-form-label col-md-3"
          >
            Rango final
          </label>
          <div className="col-md-8">
          <input
              defaultValue={data?.rangef}
              className="form-control form-control-lg"
              type="number"
              name="rangef"
              {...register("rangef")}
              placeholder="Ingresa el rango final"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="prefijo"
            className="form-label col-form-label col-md-3"
          >
            Prefijo
          </label>
          <div className="col-md-8">
            <input
              name="prefijo"
              type="text"
              className="form-control form-control-lg"
              {...register("prefijo")}
              placeholder="Ingresa tu prefijo"
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
