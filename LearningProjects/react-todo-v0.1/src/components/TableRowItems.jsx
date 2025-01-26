function Table(props)
{
    return (
      <>
          <tr onClick={()=>{props.deleteRow(props.srno)}}>
            <td>{props.srno}</td>
            <td>{props.topic}</td>
            <td>{props.desc}</td>
          </tr>
      </>
    );
}

export default Table;