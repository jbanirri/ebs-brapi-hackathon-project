import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DataBrowser(columns, rows) {
    // console.log(rows)
    // console.log(columns)
  return (
    <Table class="table" striped bordered hover>
      <thead>
        <tr>
            {
                columns && columns.map((item) => (
                    <th key={item.key}>{item.label}</th>
                ))
            }
          {/* <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        {
            rows && rows.map((row) => (
                <tr key={row.seedlotDbId}>
                    <td>
                        <Button class="button-10">Update</Button>
                    </td>
                    <td>{row.programName}</td>
                    <td>{row.seedlotName}</td>
                    <td>{row.amount}</td>
                    <td>{row.units}</td>
                </tr>
            ))
        }
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default DataBrowser;