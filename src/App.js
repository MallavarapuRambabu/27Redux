import React, { useState } from 'react';
// import { useDispatch ,useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
function App({ details, addDetails }) {
  const [detailsState, setDetails] = useState({
    name: "",
    phone: "",
    vehicalNo: "",
    image: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...detailsState, [name]: value });
  };

  const calculateAmount = () => {
    const detailsWithId = {
      ...detailsState,
      id: uuidv4()
    };

    addDetails(detailsWithId);
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={detailsState.name}
          onChange={handleInputChange}
        />
      </label>
<h1>MallavarapuRambabu</h1>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={detailsState.phone}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Vehicle No:
        <input
          type="text"
          name="vehicalNo"
          value={detailsState.vehicalNo}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />
      </label>

      <label>
        Date:
        <input
          type="datetime-local" // Use datetime-local input for date and time
          name="date"
          value={detailsState.date}
          onChange={handleInputChange}
        />
      </label>

      <button type='button' onClick={calculateAmount}>Calculate Amount</button>
      
      <div>
        {/* {selct.details && selct.details.map((obj)=><>
        <div>{obj.name}</div></>)} */}
        {/* {amount > 0 && <p>Calculated Amount: ${amount}</p>} */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  details: state.details, 
});

const mapDispatchToProps = (dispatch) => ({
  addDetails: (details) => dispatch({ type: "Add", payload: details }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
