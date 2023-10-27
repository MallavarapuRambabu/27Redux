import React from 'react'
import "./input.css"

function Input() {
  return (
    
    <div className='inputContainer '>
       <div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="firstName" disabled/>
  <label for="floatingInputDisabled">first Name</label>
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">last Name</label>
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">phone</label>
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">email</label>
  
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">password</label>
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">conform password</label>
</div>
<div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputDisabled" placeholder="lastName" disabled/>
  <label for="floatingInputDisabled">lastName</label>
</div>
        </div>
      
        
  )
}

export default Input
