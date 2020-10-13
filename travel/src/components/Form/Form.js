import React, {useState} from "react";
import './Form.scss'
import { Grid, TextField, makeStyles, FormControl, FormLabel, RadioGroup, 
  FormControlLabel, Radio, Button} from '@material-ui/core';

 const initialFValues = {
  id: 0,
  fullName:'',
  email:'',
  mobile: '',
  date: new Date (),
  isInterested: false,
}

export default function Form () {

  const validate = () => {
    let temp = {}
    temp.fullName=values.fullName ? "": "This field is required"
    temp.email=(/$|.+@.+..*/).test(values.email) ? "": "Email is not valid" 
    temp.mobile=values.mobile.length > 9 ? "": "Minimum 10 numbers required"
    setErrors ({
      ...temp
    })
    return Object.values(temp)
  }

  const [values, setValues] = useState(initialFValues);

  const [ setErrors] = useState({});

  const classes=useStyle();
  const handleInputChange= e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = () => {
    if (validate())
  alert ('testing...')
  } 

    return (
      <>
          <div className="title">
            <h5> Provide us your feedbacks</h5>
          </div>
          <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>

            <Grid container>
                <Grid item xs={6}>
                    <div className="form-field">
                        <TextField 
                          variant="outlined"
                          name="fullName"
                          label="Full Name"
                          values={values.fullName}
                          onChange={handleInputChange}
                         
                        />
                    </div>
                    <div className="form-field">
                        <TextField 
                          variant="outlined"
                          name="email"
                          label="Email"
                          values={values.enail}
                        />
                    </div>
                    <div className="form-field">
                        <TextField 
                          variant="outlined"
                          name="mobile"
                          label="Contact number"
                          values={values.mobile}
                        />
                    </div>
              </Grid>
                
                <Grid item xs={6}>
                  <FormControl>
                    <div className="form-interest">
                      <FormLabel>Interested in Tour?</FormLabel>
                        <RadioGroup row
                        name="isInterested"
                        values={values.isInterested}
                        onChange={handleInputChange}
                        >
                    
                        <FormControlLabel
                          value="yes"
                          label="Yes"
                          control={<Radio />}
                        />
                         <FormControlLabel
                          value="no"
                          label="No"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </div>
                    <div className="form-interest">
                      <FormLabel className="formlabel">If Yes, how would you like to contact?</FormLabel>
                      <RadioGroup row
                       name="isInterested"
                       values={values.isInterested}
                       onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="mobile"
                          label="Phone"
                          control={<Radio />}
                        />
                         <FormControlLabel
                          value="email"
                          label="Email"
                          control={<Radio />}
                        />
                      </RadioGroup>
                      
                        <TextField
                          id="date"
                          label="Date to contact"
                          type="date"
                          defaultValue=" "
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />  
                    </div>
                        <div className="button-form">
                          <Button 
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick="onClick"
                          >
                            Submit
                          </Button> 
                        </div>
                  </FormControl>
                </Grid>

            </Grid>
            
          </form>
    </>
    )
  }

  const useStyle = makeStyles(theme=>({
    root:{
      '& .MuiFormControl-root':{
        width:'75%',
        margin:theme.spacing(1),

      },
      button:{
        padding:theme.spacing(1),
      }
    }
  }))



