import "./FormattedPlainText.css";

interface IProps {
  text: string;
}

const FormattedPlainText = ({ text }: IProps) => {
  return (
    <div className="textContainer">
      <h3>{text}</h3>
    </div>
  );
};

export default FormattedPlainText;
