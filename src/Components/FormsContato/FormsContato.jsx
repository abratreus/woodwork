import Form from 'react-bootstrap/Form';

function FormsContato({ value, onChange }) {
  return (
    <Form.Select
      aria-label="Selecione o meio de contato"
      className="mb-3"
      name="contact"
      value={value}
      onChange={onChange}
      required
    >
      <option value="">Selecione um meio de contato</option>
      <option value="whatsapp">Whatsapp</option>
      <option value="telefone">Telefone</option>
    </Form.Select>
  );
}

export default FormsContato;