import '../styles/Plant.css'

function Plant({name, price}) {
  return (
    <>
      {name} : {price}€ 
    </>
  );
}

export default Plant