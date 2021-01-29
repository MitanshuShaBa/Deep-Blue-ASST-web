import React from 'react'
import { Button, Container, Input, Typography } from "@material-ui/core";
handleChange = (e) =>{

}
export default function login() {
  return (
    <Container>
      <Typography>
        <h1>login</h1>
      </Typography>
      <div className="login">
        <form onSubmit= {emaillogin}>
          <Input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>
          <Input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
          <Button type="submit">Login</Button> 
        </form>
    </div>
    </Container>
    
  )
}



