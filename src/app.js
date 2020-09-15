class IndecisionApp extends React.Component {
    render() {
        const title = 'indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['one', 'two', 'three']
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action />
          <Options options={options}/>
          <AddOption />
        </div>
      );
    }
  }


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>what should I do?</button>
            </div>
        )
    }
}



class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }          
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
               Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                addOption component here
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));