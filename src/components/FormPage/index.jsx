import Formulario from "../Form"
import MiniPreviewPage from "../MiniPreviewPage";
import { useState } from 'react'
import './FormPage.css'

const FormPage = () => {
    const [formData, setFormData] = useState({
    nome1: "",
    nome2: "",
    mensagem: "",
    data: "",
    foto: null,
    musica: "",
    email: "",
  });

  return (
    <div className="form-page">
     
        <div className="form-section">
          <Formulario formData={formData} setFormData={setFormData} />
        </div>

       
        <div className="preview-section">
          <MiniPreviewPage formData={formData} />
        </div>
    </div>
  )
}

export default FormPage;