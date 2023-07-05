import styles from "./FormattedPlainText.style.module.css";

interface IProps {
  text: string;
}

const FormattedPlainText: React.FC<IProps> = ({ text }) => {
  return (
    <div className={styles.textContainer}>
      <h3>{text}</h3>
    </div>
  );
};

export default FormattedPlainText;
