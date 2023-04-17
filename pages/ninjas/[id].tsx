export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map( (path: { id: Number, name: String})=> {
        return {
            params: { id: path.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();
    return {
        props: {ninja: data}
    }
  }

  interface Props {
    ninja: {
      email: string;
      name: string;
    };
  }

const Details = ({ninja}: Props) => {
  return (
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
    </div>
  )
}

export default Details