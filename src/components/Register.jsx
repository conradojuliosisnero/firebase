export default function Register() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
