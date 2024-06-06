const Edit=(props)=>{
    const handleInput = (e) => {
        props.setUserInput(e.target.value)
    }
    const Cancel=()=>{
        props.setCheck(!props.check)
    }
    //console.log(props.val)
    return(
        <div className="flex2">
            <input type='text' value={props.userInput} onChange={handleInput} />
            <button className="green">Save</button>
            <button className="red" onClick={()=> Cancel()}>Cancel</button>
        </div>
    );
}
export default Edit