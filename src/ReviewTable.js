import Table from "react-bootstrap/Table";

export default function ReviewTable() {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Campsite Name</th>
          <th>Address</th>
          <th>Vibe</th>
          <th>Amenities</th>
          <th>Location</th>
          <th>Comfort</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>TBC1</td>
          <td>TBC2</td>
          <td>TBC3</td>
          <td>TBC4</td>
          <td>TBC5</td>
          <td>TBC6</td>
          <td>TBC7</td>
        </tr>
        <tr>
          <td>2</td>
          <td>TBC1</td>
          <td>TBC2</td>
          <td>TBC3</td>
          <td>TBC4</td>
          <td>TBC5</td>
          <td>TBC6</td>
          <td>TBC7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>TBC1</td>
          <td>TBC2</td>
          <td>TBC3</td>
          <td>TBC4</td>
          <td>TBC5</td>
          <td>TBC6</td>
          <td>TBC7</td>
        </tr>
      </tbody>
    </Table>
  );
}
