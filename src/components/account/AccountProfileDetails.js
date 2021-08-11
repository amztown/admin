import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { useEffect } from 'react';
import { getCodes, editCodes } from '../../Connection/affiliate';
import { ToastContainer, toast } from 'react-toastify';

const AccountProfileDetails = props => {
  const [amazondotuk, setAmazondotuk] = useState({});
  const [amazondotes, setAmazondotes] = useState({});
  const [amazondotfr, setAmazondotfr] = useState({});

  const [amazondotde, setAmazondotde] = useState({});

  const [amazondotit, setAmazondotit] = useState({});

  const [amazondotse, setAmazondotse] = useState({});

  const [amazondotpl, setAmazondotpl] = useState({});
  const [amazondotnl, setAmazondotnl] = useState({});

  const [update, setUpdate] = useState(false);

  const handleAmazondotuk = evt => {
    setAmazondotuk({ ...amazondotuk, code: evt.target.value });
  };

  const handleAmazondotfr = evt => {
    setAmazondotfr({ ...amazondotfr, code: evt.target.value });
  };

  const handleAmazondotes = evt => {
    setAmazondotes({ ...amazondotes, code: evt.target.value });
  };

  const handleAmazondotde = evt => {
    setAmazondotde({ ...amazondotde, code: evt.target.value });
  };

  const handleAmazondotit = evt => {
    setAmazondotit({ ...amazondotit, code: evt.target.value });
  };

  const handleAmazondotse = evt => {
    setAmazondotse({ ...amazondotse, code: evt.target.value });
  };

  const handleAmazondotpl = evt => {
    setAmazondotpl({ ...amazondotpl, code: evt.target.value });
  };

  const handleAmazondotnl = evt => {
    setAmazondotnl({ ...amazondotnl, code: evt.target.value });
  };

  const handleSubmit = async (id, code) => {
    console.log(id, code);
    let res = await editCodes({ id, code });
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  useEffect(() => {
    console.log('hello');
    const fetchCodes = async () => {
      let res = await getCodes();
      console.log(res);
      let codes = res.data.codes;
      setAmazondotuk(codes[0]);
      setAmazondotes(codes[1]);
      setAmazondotfr(codes[2]);
      setAmazondotde(codes[3]);
      setAmazondotit(codes[4]);
      setAmazondotse(codes[5]);
      setAmazondotpl(codes[6]);
      setAmazondotnl(codes[7]);
    };
    fetchCodes();
    setUpdate(false);
  }, []);

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        {console.log(amazondotuk)}
        <CardHeader
          subheader="The information can be edited"
          title="Affiliate Codes"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Amazon.uk"
                name="amazondotuk"
                onChange={handleAmazondotuk}
                required
                value={amazondotuk.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotuk._id, amazondotuk.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.es"
                name="amazondotes"
                onChange={handleAmazondotes}
                required
                value={amazondotes.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotes._id, amazondotes.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.fr"
                name="amazondotfr"
                onChange={handleAmazondotfr}
                required
                value={amazondotfr.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotfr._id, amazondotfr.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.de"
                name="amazondotde"
                onChange={handleAmazondotde}
                required
                value={amazondotde.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotde._id, amazondotde.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.it"
                name="amazondotit"
                onChange={handleAmazondotit}
                required
                value={amazondotit.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotit._id, amazondotit.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.se"
                name="amazondotse"
                onChange={handleAmazondotse}
                required
                value={amazondotse.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotse._id, amazondotse.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.pl"
                name="amazondotpl"
                onChange={handleAmazondotpl}
                required
                value={amazondotpl.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotpl._id, amazondotpl.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Amazon.nl"
                name="amazondotnl"
                onChange={handleAmazondotnl}
                required
                value={amazondotnl.code}
                variant="outlined"
                focused
              />
              <br /> <br />
              <Button
                onClick={() => handleSubmit(amazondotnl._id, amazondotnl.code)}
                className="mt-3"
                color="primary"
                variant="contained"
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          {/* <Button color="primary" variant="contained">
            Save Changes
          </Button> */}
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
