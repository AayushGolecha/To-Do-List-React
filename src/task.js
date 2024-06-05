

const Task = (props) => {
    return (
        <div id="tasks">
            {props.tasks.map((input) => (
                <div className="item" key={input}>
                    <p>{input}</p>
                    <div className="btn">
                        <button className="green" onClick={() => props.edit(input)}>Edit</button>
                        <button className="red" onClick={() => props.remove(input)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Task