
export default Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <fieldset>
        <h1>Login</h1>
        <label htmlFor="Email">Email</label><br />
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <label htmlFor="Password">Password</label><br />
        <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      </fieldset>
      <button type="submit">Login</button>
    </>
  )
}