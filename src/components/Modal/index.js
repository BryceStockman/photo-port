import React from 'React';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={requestAnimationFrame(
            `../../assets/large/${category}/${index}.jpg`
          )}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClose={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
