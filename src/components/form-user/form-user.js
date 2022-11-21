import React from "react";
import { useForm } from "react-hook-form";

export default function FormUser({ userEdit, setDataUsers, toggle }) {
  const data = userEdit?.originalRow;
  // console.log(data);
  const rowIndex = userEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  const onSubmit = (userInfo) => {
    if (data) {
      setDataUsers((prevState) =>
        prevState.map((item, index) => {
          if (index === rowIndex) {
            return (prevState[index] = userInfo);
          } else {
            return item;
          }
        })
      );
    } else {
      // console.log(userInfo);
      setDataUsers((prevState) => [...prevState, userInfo]);
    }
    toggle(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label
            htmlFor="firstName"
            className="form-label col-form-label col-md-3"
          >
            Nombre
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.firstName}
              name="firstName"
              type="text"
              className="input-form"
              {...register("firstName")}
              placeholder="Ingresa tu nombre"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="lastName"
            className="form-label col-form-label col-md-3"
          >
            Apellido
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.lastName}
              name="lastName"
              type="text"
              className="input-form"
              {...register("lastName")}
              placeholder="Ingresa tu apellido"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="age" className="form-label col-form-label col-md-3">
            Edad
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.age}
              name="age"
              type="text"
              className="input-form"
              {...register("age")}
              placeholder="Ingresa tu edad"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="visits"
            className="form-label col-form-label col-md-3"
          >
            Visitas
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.visits}
              name="visits"
              type="text"
              className="input-form"
              {...register("visits")}
              placeholder="Ingresa tus Visitas"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="status"
            className="form-label col-form-label col-md-3"
          >
            Status
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.status}
              name="status"
              type="text"
              className="input-form"
              {...register("status")}
              placeholder="Ingresa tu status"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="progress"
            className="form-label col-form-label col-md-3"
          >
            Profile Progress
          </label>
          <div className="col-md-8">
            <input
              defaultValue={data?.progress}
              name="progress"
              type="text"
              className="input-form"
              {...register("progress")}
              placeholder="Ingresa tu Profile Progress"
            />
          </div>
        </div>
        {/* <div >
          <div>
            <label htmlFor="firstName" >Nombre </label>
          </div>
          <div>
            <input
              defaultValue={data?.firstName}
              name="firstName"
              type="text"
              className="input-form"
              {...register("firstName")}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="lastName">Apellidos </label>
          </div>
          <div>
            <input
              defaultValue={data?.lastName}
              name="lastName"
              type="text"
              className="input-form"
              {...register("lastName")}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="age">Edad</label>
          </div>
          <div>
            <input
              defaultValue={data?.age}
              name="age"
              type="text"
              className="input-form"
              {...register("age")}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="visits">Visitas</label>
          </div>
          <div>
            <input
              defaultValue={data?.visits}
              name="visits"
              type="number"
              className="input-form"
              {...register("visits")}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="status">Status</label>
          </div>
          <div>
            <input
              defaultValue={data?.status}
              name="status"
              type="text"
              className="input-form"
              {...register("status")}
            />
          </div>
        </div>
        <div>
          <div className="label-form">
            <label htmlFor="progress">Profile Progress</label>
          </div>
          <div>
            <input
              defaultValue={data?.progress}
              name="progress"
              type="number"
              className="input-form"
              {...register("progress")}
            />
          </div>
        </div> */}
        <div style={{ marginTop: "15px" }}>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
