function KeyListCreator({ array }) {
    return (
      <>
        <div>
          {array.map((item) => (
            <>{`"${item}",`}</>
          ))}
        </div>
      </>
    );
  }
  export default KeyListCreator