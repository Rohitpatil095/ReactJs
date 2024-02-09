export default function Picker()
{

    let [currColor, setCurrColor] = useState("white");

    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100vh",
            backgroundColor: currColor,
          }}
        >
          <button
            className="mr-2 bg-blue-500"
            onClick={() => setCurrColor("blue")}
          >
            blue
          </button>
          <button
            className="mr-2 bg-red-500"
            onClick={() => setCurrColor("red")}
          >
            red
          </button>
          <button
            className="mr-2 bg-pink-500"
            onClick={() => setCurrColor("pink")}
          >
            pink
          </button>
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => setCurrColor("black")}
          >
            black
          </button>
        </div>
      </>
    );
}