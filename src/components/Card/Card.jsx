import "./Card.css";

export const Card = ({ id, english, transcription, russian, tags, boolean }) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-body" id={id} data-tags={tags} data-boolean={boolean}>
          <div className="card-front">
            <h2>{english}</h2>
          </div>
          <div className="card-back">
            <p>{transcription}</p>
            <p>{russian}</p>
          </div>
        </div>
      </div>
    </>
  );
};
