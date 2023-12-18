// input data as type of list of todo objects
// [{srno, topic,desc}] --- input list name todos

function Tablestododata(props){
    return (
      <>
        <tr>
          <td>
            {props.srno},{todos[0].topic}
            {/* <td>props.todos.map((todo) =>
                        {
                            todo.srno,
                            todo.topic,
                            todo.desc
                        }) */}
          </td>
        </tr>
      </>
    );
}

export default Tablestododata;