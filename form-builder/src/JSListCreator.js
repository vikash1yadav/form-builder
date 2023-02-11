function JsListCreator({ array }) {
    return (
      <>
        {array.map((item) => (
          <>{`"${item}": "" , "${item}_remarks":"",`}</>
        ))}
      </>
    );
  }
  export default JsListCreator