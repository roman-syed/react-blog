

// function Test() {
//     return (
//         <div className="test">
//             <h1>This is test component</h1>
//         </div>
//     );
// }

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
function Test() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
        <div>
            <hr/>
            <ul>{listItems}</ul>
        </div>
    );
}

export default Test