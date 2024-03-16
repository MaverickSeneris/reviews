import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';
import RatingInput from '../shared/ratingInput';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={globalStyles.formContainer}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        onSubmit={(values, {resetForm}) => {
          console.log({...values, rating});
          resetForm();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Title"
              style={globalStyles.input}
            />
            <TextInput
              onChangeText={handleChange('body')}
              onBlur={handleBlur('body')}
              value={values.body}
              placeholder="Body"
              multiline
              style={globalStyles.input}
            />
            <RatingInput rating={rating} setRating={setRating} />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
