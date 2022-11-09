import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";

export default function Table({ columns, data, setOpenModal, btnAgregar }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <Panel>
      <PanelHeader>React Table</PanelHeader>
      <PanelBody>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="d-flex align-items-center">
            <label className="form-label pe-2 mb-0">Page Length:</label>
            <div>
              <select
                className="form-select"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {btnAgregar ? (
              <button
                style={{ borderRadius: "15px", border: "2px solid" }}
                onClick={handleClick}
              >
                Agregar {btnAgregar}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </PanelBody>
      <div className="table-responsive">
        <table
          className="table table-panel table-bordered mb-0"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="w-150px"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ minWidth: "150px" }}
                    >
                      <span>{column.render("Header")}</span>
                      <span className="ms-auto">
                        {column.sortable ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className="fa fa-sort-down fa-fw fs-14px text-blue"></i>
                            ) : (
                              <i className="fa fa-sort-up fa-fw fs-14px text-blue"></i>
                            )
                          ) : (
                            <i className="fa fa-sort fa-fw fs-14px opacity-3"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <PanelBody>
        <div className="d-flex align-items-center justify-content-center">
          <div className="me-1">Go to page:</div>
          <div className="w-50px mx-2 me-auto">
            <input
              className="form-control"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </div>
          <ul className="pagination mb-0">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <i className="fa fa-angle-double-left"></i>
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <i className="fa fa-angle-left"></i>
              </button>
            </li>
            <li className="page-item d-flex align-items-center px-2">
              <div>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
              </div>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <i className="fa fa-angle-right"></i>
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <i className="fa fa-angle-double-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </PanelBody>
    </Panel>
  );
}
