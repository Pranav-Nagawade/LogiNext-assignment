import { React, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const Form = ({ person, setPerson, handleClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: person,
  });

  const watchAllFields = watch();
  const onSubmit = (data) => {
    setPerson(watchAllFields);
    handleClose();
  };

  return (
    <Box sx={style}>
      <Typography sx={{ padding: '10px 20px' }} id='modal-modal-title' variant='h6'>
        Basic modal
      </Typography>
      <Divider variant='fullWidth' />
      <form
        style={{ display: 'flex', flexDirection: 'column', margin: '4% 4% 10% 24%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '7%' }}>
          <span style={{ color: 'red' }}>*</span>
          <label htmlFor='name'>Name: </label>
          <input
            style={{ flexGrow: 2 }}
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
        </div>
        {errors.name?.type === 'required' && (
          <p style={{ marginTop: 2, color: 'red' }} role='alert'>
            Name is required
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '7%' }}>
          <span style={{ color: 'red' }}>*</span>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            style={{ flexGrow: 2 }}
            {...register('email', { required: 'Email Address is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
        </div>
        {errors.email && (
          <p style={{ marginTop: 2, color: 'red' }} role='alert'>
            {errors.email?.message}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '7%' }}>
          <span style={{ color: 'red' }}>*</span>
          <label htmlFor='phone'>Phone: </label>
          <input
            style={{ flexGrow: 2 }}
            {...register('phone', { required: 'Phone is required' })}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
        </div>
        {errors.phone && (
          <p style={{ marginTop: 2, color: 'red' }} role='alert'>
            {errors.phone?.message}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '7%' }}>
          <span style={{ color: 'red' }}>*</span>
          <label htmlFor='website'>Website: </label>
          <input
            type='url'
            style={{ flexGrow: 2 }}
            {...register('website', { required: 'Website required' })}
            aria-invalid={errors.website ? 'true' : 'false'}
          />
        </div>
        {errors.website && (
          <p style={{ marginTop: 2, color: 'red' }} role='alert'>
            {errors.website?.message}
          </p>
        )}
      </form>
      <Divider />

      <div style={{ display: 'flex', justifyContent: 'end', padding: 8 }}>
        <Button sx={{ marginRight: 1 }} size='small' variant='outlined' onClick={handleClose}>
          Cancel
        </Button>

        <Button size='small' variant='contained' onClick={() => onSubmit()}>
          Ok
        </Button>
      </div>
    </Box>
  );
};

export default Form;
