const React = require('react')
const Default = require('./layouts/Default')

function Index ({ breads, title }) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <p>I have {breads[2].name} bread!</p>
        {/* the above code will use the breads model array to render breads data */}
        <ul>{
            breads.map((bread, index)=> {
                return (
                <li key={index}>
                    <a href={`/breads/${index}`}>
                    {bread.name}
                    </a>
                </li>
                )
            })
            }
        </ul>
      </Default>
    )
}

module.exports = Index
