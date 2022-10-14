const Avatar = (props) => {
    return (
      <img
        className="Avatar"
        src="http://placekitten.com/g/64/64"
        alt={props.author.name}
      />
    );
  };
  
  export default Avatar;