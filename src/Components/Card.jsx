
export const Card = ({ userData }) => {

  const {nombre, email, pokemon} = userData

  return (
    <>
      <div className={`card_container ${pokemon.tipo}`}>
        <h3>Bienvenido! {nombre}</h3>
        <h4>Tu pokemon es: {pokemon.nombre}</h4>
        <img src={pokemon.img} alt={`Imagen de ${pokemon.nombre}`} className="card_img"/>
      </div>
      <p>Recuerde validar su cuenta de PokeWorld, al mail {email}</p>
    </>
  )
}
