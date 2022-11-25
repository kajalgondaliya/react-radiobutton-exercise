import React, { useEffect, useState } from 'react';
import {
  getRadioOption,
  postRadioOption,
  radioOption,
} from '../api/radioOption';

export const Home = () => {
  const [radioOptions, setRadioOptions] = useState({});
  const [selectedResponse, setSelectedResponse] = useState({});
  const [selectedRadioOption, setSelectedRadioOption] = useState('');
  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const data = await radioOption();
    const selectRadioOption = await getRadioOption();
    setSelectedRadioOption(selectRadioOption['selected']);
    setRadioOptions(data);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const selectedValue = { selected: value };
    setSelectedResponse(selectedValue['selected'])
    setSelectedRadioOption(selectedValue['selected']);
    
  };
  const handleSubmitData = async() => {
   const updatedData = await postRadioOption(selectedResponse);
   console.log(selectedResponse,"selectedResponse");
   setSelectedRadioOption(updatedData['selected']);
  };
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        <h3>React Exercise:</h3>
        <div
          style={{
            marginLeft: '20px',
          }}
        >
          {Object.entries(radioOptions).map(([key, val], i) => {
            return (
              <div key={i}>
                <>
                  <input
                    type='radio'
                    value={key}
                    defaultChecked={key == selectedRadioOption}
                    checked={selectedRadioOption === key}
                    name='buttons'
                    onChange={(event) => {
                      handleInputChange(event);
                    }}
                    style={{ marginRight: '10px' }}
                  />{' '}
                  {val}
                </>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubmitData}
          style={{
            marginTop: '10px',
            height: '40px',
            background: '#e1e1ec',
            border: '1px solid',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
