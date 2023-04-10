import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, IconButton, Modal } from '@mui/material';
import Form from './form';

export default function MediaCard({ data, handleDelete }) {
  const [person, setPerson] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
    companyName: data.company.name,
  });
  const [liked, setLiked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <img
          style={{ backgroundColor: '#fcfcfc' }}
          src={`https://avatars.dicebear.com/v2/avataaars/${person.name}.svg?options[mood][]=happy`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {person.name}
          </Typography>

          {Object.entries(person).map(
            ([name, value]) =>
              name != 'name' && (
                <Typography key={value} variant='body2' color='text.secondary'>
                  {value}
                </Typography>
              ),
          )}
        </CardContent>
        <CardActions
          style={{ backgroundColor: '#fcfcfc', display: 'flex', justifyContent: 'space-evenly' }}
        >
          <IconButton color='error' onClick={() => setLiked((prev) => !prev)}>
            {liked ? <FavoriteTwoToneIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Divider orientation='vertical' flexItem variant='middle' />

          <IconButton color='default' onClick={handleOpen}>
            <BorderColorOutlinedIcon />
          </IconButton>
          <Divider orientation='vertical' flexItem variant='middle' />

          <IconButton color='default'>
            <DeleteIcon onClick={() => handleDelete(data.id)} />
          </IconButton>
        </CardActions>
      </Card>
      <Modal open={openModal} onClose={handleClose}>
        <Form person={person} setPerson={setPerson} handleClose={handleClose} />
      </Modal>
    </>
  );
}
