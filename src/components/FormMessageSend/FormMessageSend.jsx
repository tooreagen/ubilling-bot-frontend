import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import CustomErrorMessage from 'components/ChatComponents/CustomErrorMessage/CustomErrorMessage';
import { FormMessageSendStyled } from './FormMessageSendStyled';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const FormMessageSend = ({ onHeightChange }) => {
  const [heightMessagingBox, setHeightMessagingBox] = useState(71);

  useEffect(() => {
    onHeightChange(heightMessagingBox);
  }, [heightMessagingBox, onHeightChange]);

  return (
    <Formik
      initialValues={{ message: '' }}
      validate={values => {
        const errors = {};
        if (!values.message) {
          errors.message = `Введіть текст`;
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <FormMessageSendStyled onSubmit={handleSubmit}>
          <Field
            as="textarea"
            name="message"
            maxLength={700}
            onChange={handleChange}
            onInput={event => {
              event.target.style.height = 'auto';
              event.target.style.height = `${event.target.scrollHeight}px`;
              setHeightMessagingBox(event.target.style.height);
            }}
            value={values.message}
            style={{
              height: 'auto',
              width: '100%',
              padding: '15px',
              paddingRight: '60px',
              fontSize: '18px',
              resize: 'none',
              overflow: 'hidden',
              outline: 'none',
              backgroundColor: 'var(--base-text-color)',
              borderRadius: '20px',
            }}
          />
          <ErrorMessage component={CustomErrorMessage} name="message" />
          <IconButton
            size="large"
            type="submit"
            disabled={isSubmitting}
            style={{
              top: '50%',
              right: '10px',
              position: 'absolute',
              height: '40px',
              transform: 'translate(0, -50%)',
            }}
          >
            <ArrowCircleUpIcon fontSize="inherit" />
          </IconButton>
        </FormMessageSendStyled>
      )}
    </Formik>
  );
};

export default FormMessageSend;
