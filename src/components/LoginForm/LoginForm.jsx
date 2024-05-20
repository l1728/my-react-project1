import styles from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;
    console.log(login, password);
    console.log(login.value, password.value);
    form.reset();
  };
  return (
    <form className={styles.contForm} onSubmit={handleSubmit}>
      <input className={styles.name} type="text" name="login" />
      <input className={styles.password} type="password" name="password" />
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
