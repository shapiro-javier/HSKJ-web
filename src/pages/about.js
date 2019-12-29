import React from "react"
import Layout from "../components/layout"
import { JGET } from "../utils/API"

class AboutPage extends React.Component {
  state={
    res:null
  }
  async componentDidMount(){
   const response = await JGET('account/stats')
   if(response.ok){
   response.json()
   .then(res=>this.setState({res})) 
   }

    
  }
  render() {
    return (
      <Layout>
        <h1>About the Author</h1>
        <p>Welcome to my Gatsby site.</p>
        <p>Server Uptime : {this.state.res.server_time}</p>
      </Layout>
    )
  }
}

export default AboutPage