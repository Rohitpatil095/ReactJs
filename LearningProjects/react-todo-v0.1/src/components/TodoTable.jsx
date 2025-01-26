import TableRowItems from "./TableRowItems"

function TodoTable(props){
    return (
      <>
        <table className="table table-hover">
          <thead className="card-head">
            <tr>
                <td>srno</td>
                <td>topic</td>
                <td>Desc</td>
            </tr>
          </thead>

          <tbody className="card-body">

            {props.todos.map(data =>(
                <TableRowItems 
                srno={data.srno}
                topic={data.topic}
                desc={data.desc}
                deleteRow={props.deleteCurrRow}
                />
            ))}

            {/* <TableRowItems
              srno={props.todos[0].srno}
              topic={props.todos[0].topic}
              desc={props.todos[0].desc}
            /> */}
          </tbody>
        </table>
      </>
    );
}

export default TodoTable;