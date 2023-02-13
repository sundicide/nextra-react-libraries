import { AgGridReact } from "ag-grid-react"
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function _AgGrid(props) {
  return (
    <AgGridReact {...props} />
  )
}