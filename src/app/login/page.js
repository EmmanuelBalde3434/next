import "./login.css"
export default function Home() {
    return (
      <div className="container">
        <label >Corre electrónico:</label>
        <input type="text" name="usuario" class="input" placeholder="pedro122@gmail.com" required></input>
        <label>Contraseña:</label>
        <input type="password" name="contraseña" required></input>
        <button type="submit">Iniciar sesión</button>
      </div>
    )
  }