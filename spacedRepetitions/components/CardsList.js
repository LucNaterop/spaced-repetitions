
import React from 'react';
import * as Na from 'native-base';

export default class CardsList extends React.Component {
  
  static navigationOptions(navigation){
    return { title: 'My Cards' }
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cards: [],
    }
  }

  componentDidMount() {
    fetch(BaseAPI + '/cards')
    .then((response) => response.json()).then((r) => {
      if(r.status == 'error') alert(r.message);
      else {
        this.setState({
          loading: false,
          cards: r.data
        })
      }
    }).catch((error) => { console.error(error); });
  }

  renderRow(card) {
    return (
      <Na.ListItem onPress={() => this.props.navigation.navigate('CardDetail', {_id: card._id})} >
        <Na.Left>
          <Na.Text>{card.frontContent}</Na.Text>
        </Na.Left>
        <Na.Right>
          <Na.Icon name="arrow-forward" />
        </Na.Right>
      </Na.ListItem>
    );
  }

  render() {
    if(this.state.loading) return ( <Na.Spinner color='green'></Na.Spinner> );
    return (
      <Na.Container>
        <Na.Content style={{backgroundColor: 'white'}}>
          <Na.List
            dataArray={this.state.cards} 
            renderRow={this.renderRow.bind(this)}
          />
        </Na.Content>
      </Na.Container>
    );
  }
}
