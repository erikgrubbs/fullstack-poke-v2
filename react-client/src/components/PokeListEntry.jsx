import React from "react";
import axios from "axios";

class PokeListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      newName: this.props.poke.name
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios
      .put(`api/pokemon/${this.props.poke.id}`, {
        name: this.state.newName
      })
      .then(() => {
        this.setState({ edit: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <img src={this.props.poke.image_url} />
        {this.state.edit ? (
          <div>
            <input
              value={this.state.newName}
              onChange={e => this.setState({ newName: e.target.value })}
              type="text"
            ></input>
            <button onClick={this.handleSubmit}>Change Name</button>
          </div>
        ) : (
          <h3 onClick={() => this.setState({ edit: true })}>
            {this.state.newName}
          </h3>
        )}
        <p>{this.props.poke.type_id}</p>
      </div>
    );
  }
}

export default PokeListEntry;
