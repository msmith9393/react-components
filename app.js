// app component
class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <GroceryList items={['Cucumber', 'Kale', 'Apple']} />
      </div>
    );
  }

}
  


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
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
        <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
