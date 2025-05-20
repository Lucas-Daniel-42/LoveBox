import React from 'react';
import './MiniPreviewPage.css';
import RelationshipDuration from '../RelationShipDuration';

const MiniPreviewPage = ({ formData }) => {
  const { nome1, nome2, mensagem, foto, data } = formData;

  // Gerar uma URL para a imagem carregada, se for um arquivo
  const imagePreviewUrl = foto && typeof foto === 'object' ? URL.createObjectURL(foto) : null;

  return (
    <div className="mini-container">
      <div className="mini-card">
        <div className="mini-title-area">
          <h2 className="mini-title">
            {nome1} <div className="and">E</div> {nome2}
          </h2>
        </div>

        {imagePreviewUrl && (
          <div className="mini-image">
            <img src={imagePreviewUrl} alt="Preview" className="preview-image" />
          </div>
        )}

        <div className="mini-body">
          <p className="mini-message">
            <em>{mensagem || 'Sua mensagem especial aparecerá aqui.'}</em>
          </p>
          <p className="mini-date">
            <strong>Estamos juntos há</strong>
            <RelationshipDuration startDate={data} />
          </p>
        </div>

        <div className="mini-footer">Prévia do seu site</div>
      </div>
    </div>
  );
};

export default MiniPreviewPage;
