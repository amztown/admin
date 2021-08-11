import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import { updateApiKey, getApiKey } from '../../Connection/affiliate';

const SettingsPassword = props => {
  const [values, setValues] = useState('');
  const [id, setId] = useState('');

  const handleChange = event => {
    setValues(event.target.value);
  };

  const handleSubmit = async () => {
    let res = await updateApiKey({ id: id, apiKey: values });
  };

  useEffect(() => {
    console.log('hello');
    const fetchApiKey = async () => {
      let res = await getApiKey();
      console.log(res);
      setValues(res.data?.apiKey[0].apiKey);
      setId(res.data?.apiKey[0]._id);
    };
    fetchApiKey();
  }, []);

  return (
    <form {...props}>
      <Card>
        {console.log(values)}
        <CardHeader subheader="Update Api Key" title="Api Key" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Api Key"
            margin="normal"
            name="apiKey"
            onChange={handleChange}
            type="apiKey"
            value={values}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
