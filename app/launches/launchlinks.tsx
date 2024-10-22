import Link from 'next/link'

function Launchlinks(props: {list: any[]}) {

  let x = 1;
  return (
    <ul className="text-xs">    
      {props.list.map((la) => (
        <li key={la}>
          <Link href={`/launches/${encodeURIComponent(la)}`}>
            {`Launch ${x++}`}
          </Link>
        </li>        
      ))}
    </ul>
  )
}
 
export default Launchlinks