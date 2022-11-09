import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FormUser({ userEdit, setDataUsers, toggle }) {
  const data = userEdit?.originalRow;
  const rowIndex = userEdit?.rowIndex;
  const { register, handleSubmit } = useForm();

  const onSubmit = (userInfo) => {
    if (data) {
      setDataUsers((prevState) =>
        prevState.map((item, index) => {
          if (index == rowIndex) {
            return (prevState[index] = userInfo);
          } else {
            return item;
          }
        })
      );
    } else {
      console.log(userInfo);
      setDataUsers((prevState) => [...prevState, userInfo]);
    }
    toggle((prevState) => !prevState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="firstName">Nombre </label>
          </div>
          <div>
            <input
              defaultValue={data?.firstName}
              name="firstName"
              type="text"
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
              {...register("status")}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="progress">Profile Progress</label>
          </div>
          <div>
            <input
              defaultValue={data?.progress}
              name="progress"
              type="number"
              {...register("progress")}
            />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
