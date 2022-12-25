import React from 'react';

interface IModal {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({open, onClose}) => {
  return <>
    <div className={`modal ${open ? 'active' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title"> Header</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">Content</div>
      </div>
    </div>
  </>;
};

export default Modal;