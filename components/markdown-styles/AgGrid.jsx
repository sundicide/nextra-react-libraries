import { forwardRef } from "react";

import { AgGridReact } from "ag-grid-react"
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default forwardRef(function AgGrid(props, ref) {
  return (
    <AgGridReact ref={ref} {...props} />
  )
})