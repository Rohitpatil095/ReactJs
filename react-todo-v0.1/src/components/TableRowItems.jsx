function Table(props)
{
    return (
      <>
          <tr>
            <td>{props.srno}</td>
            <td>{props.topic}</td>
            <td>{props.desc}</td>
          </tr>
      </>
    );
}

export default Table;