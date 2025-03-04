import './App.css'

function App() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
        fetch('http://localhost:5000/users', {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              alert('data inserted')

              form.reset();
            }
        })
    }

  return (
    <>

      <h1>Simple Crud Operation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder="Name" />
        <br />
        <input type="text" name='email' placeholder="Email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
