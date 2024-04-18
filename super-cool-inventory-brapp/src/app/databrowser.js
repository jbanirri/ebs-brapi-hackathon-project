import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const columns = [
    // {
    //   key: "actions",
    //   label: ""
    // },
    {
      key: "seedlotName",
      label: "Seedlot Name"
    },
    {
      key: "germplasmName",
      label: "Germplasm Name"
    },
    {
      key: "amount",
      label: "Amount"
    },
    {
      key: "units",
      label: "Units"
    }
  ]

function DataBrowser(rows) {
  return (
    
    <Table class="table" striped bordered hover>
      <thead>
        <tr>
            <th></th>
            {
                columns && columns.map((item) => (
                    <th key={item.key}>
                        <Form.Label>{item.label}</Form.Label>
                        <Form.Control
                            type="text"
                            id={item.seedlotDbId}
                        />
                        {/* <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text> */}
                    </th>
                ))
            }
        </tr>
      </thead>
      <tbody>
        {
            rows && rows.map((row) => (
                <tr key={row.seedlotDbId}>
                    <td>
                        <Button class="button-10">Update</Button>
                    </td>
                    <td>{row.seedlotName}</td>
                    <td>{row.contentMixture[0].germplasmName}</td>
                    <td>{row.amount}</td>
                    <td>{row.units}</td>
                </tr>
            ))
        }
      </tbody>
    </Table>
  );
}

export default DataBrowser;