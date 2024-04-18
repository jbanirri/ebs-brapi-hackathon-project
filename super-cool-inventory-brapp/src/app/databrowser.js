import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const columns = [
    {
      key: "actions",
      label: ""
    },
    {
      key: "programName",
      label: "Program Name"
    },
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
            {
                columns && columns.map((item) => (
                    <th key={item.key}>{item.label}</th>
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
                    <td>{row.programName}</td>
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