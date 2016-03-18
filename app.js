// app component
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale', 'Apple']} />
  </div>
);

// grocery list component
var GroceryList = (props) => {
  return (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );
};


// grocery list item componenet
var GroceryListItem = (props) => {
  var state = {
    hover: false
  }
  var onListItemHover = (event) => {
    if (!state.hover) {
      state.hover = true;
    } else {
      state.hover = false;
    }
  };

  var style = {
    fontWeight: state.hover ? 'bold' : 'normal'
  }

  return (
    <li style={style} onMouseOver={onListItemHover}>{props.item}</li>
  );

}


ReactDOM.render(<App />, document.getElementById('app'));
