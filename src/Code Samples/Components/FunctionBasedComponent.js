const functionBasedComponent = (props) => {
  const inputClassName = {
    backgroundColor: 'green',
    color: 'black',
    font: 'inherit',
    border: '3px solid black',
    padding: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '5px auto',
  };
  return (
    <div className={props.stylePhones}>
      <p className={props.stylePhone} onClick={props.onClick}>
        Type: {props.type} Color: {props.color}
      </p>
      <input style={inputClassName} type="text" value={props.type}/>
    </div>
  );
};

export default functionBasedComponent;
