import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form, Input } from 'semantic-ui-react'

import { constructClientParameterDetails } from '../../helpers/parameters/constructClientParameterDetails'

export class Parameter extends Component {
  componentDidMount() {}

  render() {
    const s = this.state

    return (
      <Card className="parameter-card-width" raised>
        <Card.Content>
          <Card.Header>{p.title}</Card.Header>
          <Card.Meta>{p.placeholder}</Card.Meta>
          <Card.Content>Current Value: {p.value}</Card.Content>
          <Card.Content extra>
            <Button
              color="black"
              id="upvote"
              basic
              onClick={e => onClick(p.title, 'upvote', e)}
            >
              DownVote
            </Button>
            <Button
              color="black"
              id="downvote"
              basic
              onClick={e => onClick(p.title, 'downvote', e)}
            >
              UpVote
            </Button>
          </Card.Content>
          <Form>
            <Form.Field inline>
              <Input placeholder="Your Vote" />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Parameter)
