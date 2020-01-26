import React from "react"
import { Loader, Segment } from "semantic-ui-react"

export default function Loading() {
  return (
    <span>
      <Segment>
        <Loader active inline="centered" size="huge" />
      </Segment>
    </span>
  )
}
