import { useState } from "react";

function CreateTodoTask(props) {
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('');

  const submitTodos= ()=>
  {
    if(description!=="" && topic!=="")
    {
        props.addFun(topic,description);
        setTopic('');
        setDescription('');
    }
  }

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Topic Name</label>
          <input
            type="text"
            required
            onChange={(e) => {
                setTopic(e.target.value);
            }}
            value={topic}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Topic Description</label>
          <textarea
            row={3}
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={submitTodos}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateTodoTask;
