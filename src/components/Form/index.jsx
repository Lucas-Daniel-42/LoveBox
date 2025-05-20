import Button from '../Button';
import './Form.css'

const Formulario = ({formData, setFormData}) => {


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados, como enviá-los a uma API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome 1:</label>
        <input type="text" name="nome1" value={formData.nome1} onChange={handleChange} />
      </div>
      <div>
        <label>Nome 2:</label>
        <input type="text" name="nome2" value={formData.nome2} onChange={handleChange} />
      </div>
      <div>
        <label>Mensagem fofa:</label>
        <textarea name="mensagem" value={formData.mensagem} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Foto:</label>
        <input type="file" name="foto" onChange={handleChange} />
      </div>
      <div>
        <label>Data do início do namoro:</label>
        <input type="date" name="data" value={formData.data} onChange={handleChange} />
      </div>
      <div>
        <label>Música (YouTube):</label>
        <input type="url" name="musica" value={formData.musica} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <Button content="Enviar"/>
    </form>
  );
};

export default Formulario;
